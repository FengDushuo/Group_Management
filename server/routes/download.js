const router = require('koa-router')()
const send = require('koa-send')
const {  getPacpDownload, getCsvDownload, getPdfDownload} = require('../controller/download')
const path = require('path')

router.prefix('/download')

function handleRes(ctx, next, res) {
	if (res.status === 0) {
		ctx.body = res
	} else {
		ctx.status = res.httpCode
		ctx.body = res
		// ctx.message = res.message   //本来想直接设置fetch的statusText，但是加了这句话请求就出错
	}
}


router.get('/PcapFiles', async function (ctx, next) {
	const res = await getPacpDownload(ctx.query)
	handleRes(ctx, next, res)
})

router.get('/PcapDownload', async (ctx) =>{
    // const name = ctx.params.name;
    // console.log(name);
    const { filefield } = ctx.query
    console.log(filefield)
    const filepath = `./public/tcpdump/data${filefield}`;
    ctx.attachment(filepath);
    try {
        await send(ctx, filepath);
    } catch (err) {
        if (err.status == 404) {
          throw err;
        }
    }

})

router.get('/CsvFiles', async function (ctx, next) {
	const res = await getCsvDownload(ctx.query)
	handleRes(ctx, next, res)
})

router.get('/CsvDownload', async (ctx) =>{
    // const name = ctx.params.name;
    // console.log(name);
    const { filefield } = ctx.query
    console.log(filefield)
    const filepath = `./public/cicflowmeter/data${filefield}`;
    ctx.attachment(filepath);
    try {
        await send(ctx, filepath);
    } catch (err) {
        if (err.status == 404) {
          throw err;
        }
    }

})


router.get('/PdfFiles', async function (ctx, next) {
	const res = await getPdfDownload(ctx.query)
	handleRes(ctx, next, res)
})

router.get('/PdfDownload', async (ctx) =>{
    // const name = ctx.params.name;
    // console.log(name);
    const { filefield } = ctx.query
    console.log(filefield)
    const filepath = `./public/pdf/CrTe2${filefield}`;
    ctx.attachment(filepath);
    try {
        await send(ctx, filepath);
    } catch (err) {
        if (err.status == 404) {
          throw err;
        }
    }

})



module.exports = router
