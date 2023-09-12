const router = require('koa-router')()
const { register, checkName, getIpInfo, login, getWxUsers, getWxUser, updateUser, deleteUsers, getAllWxUsers } = require('../controller/customer')

router.prefix('/customer')

function handleRes(ctx, next, res) {
	if (res.status === 0) {
		ctx.body = res
	} else {
		ctx.status = res.httpCode
		ctx.body = res
		// ctx.message = res.message   //本来想直接设置fetch的statusText，但是加了这句话请求就出错
	}
}

router.post('/register', async function (ctx, next) {
	const { username, password } = ctx.request.body
	const res = await register(username, password, ctx)
	handleRes(ctx, next, res)
})

router.post('/login', async function (ctx, next) {
	const { username, password } = ctx.request.body
	const res = await login(username, password, ctx)
	handleRes(ctx, next, res)
})

router.get('/checkName', async function (ctx, next) {
	const { username } = ctx.query
	const res = await checkName(username)
	handleRes(ctx, next, res)
})

router.get('/getIpInfo', async function (ctx, next) {
	const res = await getIpInfo(ctx)
	handleRes(ctx, next, res)
})

router.get('/getWxUsers', async function (ctx, next) {
	const res = await getWxUsers(ctx.query)
	handleRes(ctx, next, res)
})

router.get('/getWxUser', async function (ctx, next) {
	const res = await getWxUser(ctx.query)
	handleRes(ctx, next, res)
})

router.post('/update', async function (ctx, next) {
	const sessionId = ctx.cookies.get('sessionId')
	const res = await updateUser(ctx.request.body, sessionId)
	handleRes(ctx, next, res)
})

router.post('/delete', async function (ctx, next) {
	const res = await deleteUsers(ctx.request.body)
	handleRes(ctx, next, res)
})

router.get('/getAllWxUsers', async function (ctx, next) {
	const res = await getAllWxUsers()
	handleRes(ctx, next, res)
})

module.exports = router
