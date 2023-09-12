const router = require('koa-router')()
const uploadFile = require('../utils/upload')
const path = require('path')

// router.prefix('/source')

function handleRes(ctx, next, res) {
	if (res.status === 0) {
		ctx.body = res
	} else {
		ctx.status = res.httpCode
		ctx.body = res
		// ctx.message = res.message   //本来想直接设置fetch的statusText，但是加了这句话请求就出错
	}
}
//上传接口
router.post('/imagesource_upload/loginwelcome', async (ctx, next) => {
	const { isImg, fileType,intofileName } = ctx.query
	console.log(ctx)
	const serverFilePath = path.join(__dirname, '../public/upload-imagesource')
	const res = await uploadFile(ctx, {
		fileType: fileType || 'ImageSource', // common or album
		path: serverFilePath,
		isImg: !!isImg,
		intofileName: intofileName || '1.png'
	})
	handleRes(ctx, next, res)
})

router.post('/imagesource_upload/indexenv', async (ctx, next) => {
	const { isImg, fileType,intofileName } = ctx.query
	console.log(ctx)
	const serverFilePath = path.join(__dirname, '../public/upload-imagesource')
	const res = await uploadFile(ctx, {
		fileType: fileType || 'ImageSource', // common or album
		path: serverFilePath,
		isImg: !!isImg,
		intofileName: intofileName || '1.png'
	})
	handleRes(ctx, next, res)
})

router.post('/imagesource_upload/indexbg', async (ctx, next) => {
	const { isImg, fileType,intofileName } = ctx.query
	console.log(ctx)
	const serverFilePath = path.join(__dirname, '../public/upload-imagesource')
	const res = await uploadFile(ctx, {
		fileType: fileType || 'ImageSource', // common or album
		path: serverFilePath,
		isImg: !!isImg,
		intofileName: intofileName || '1.png'
	})
	handleRes(ctx, next, res)
})

router.post('/imagesource_upload/indexbanner', async (ctx, next) => {
	const { isImg, fileType,intofileName } = ctx.query
	console.log(ctx)
	const serverFilePath = path.join(__dirname, '../public/upload-imagesource')
	const res = await uploadFile(ctx, {
		fileType: fileType || 'ImageSource', // common or album
		path: serverFilePath,
		isImg: !!isImg,
		intofileName: intofileName || '1.png'
	})
	handleRes(ctx, next, res)
})

router.post('/filesource_upload/banddos', async (ctx, next) => {
	const { isImg, fileType,intofileName } = ctx.query
	console.log(ctx)
	const serverFilePath = path.join(__dirname, '../public/upload-files')
	console.log(!!isImg)
	const res = await uploadFile(ctx, {
		fileType: fileType || 'FileSource', // common or album
		path: serverFilePath,
		isImg: !!isImg,
		intofileName: intofileName || 'FILE'
	})
	handleRes(ctx, next, res)
})

module.exports = router
