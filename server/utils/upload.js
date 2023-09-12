const inspect = require('util').inspect
const path = require('path')
const fs = require('fs')
const Busboy = require('busboy')
const { SuccessModel, ErrorModel } = require('../model/resModel')

/**
 * 同步创建文件目录
 * @param  {string} dirname 目录绝对地址
 * @return {boolean}        创建目录结果
 */
function mkdirsSync(dirname) {
	if (fs.existsSync(dirname)) {
		return true
	} else {
		if (mkdirsSync(path.dirname(dirname))) {
			fs.mkdirSync(dirname)
			return true
		}
	}
}

/**
 * 获取上传文件的后缀名
 * @param  {string} fileName 获取上传文件的后缀名
 * @return {string}          文件后缀名
 */
function getSuffixName(fileName) {
	let nameList = fileName.split('.')
	return nameList[nameList.length - 1]
}

/**
 * 上传文件
 * @param  {object} ctx     koa上下文
 * @param  {object} options 文件上传参数 fileType文件类型， path文件存放路径
 * @return {promise}         
 */
function uploadFile(ctx, options) {
	let req = ctx.req
	let res = ctx.res
	let busboy = new Busboy({ headers: req.headers })

	// 获取类型
	let fileType = options.fileType || 'common'
	let intofileName = options.intofileName
	console.log(intofileName)
	let filePath = path.join(options.path, fileType)
	let mkdirResult = mkdirsSync(filePath)       //创建上传文件的目录

	return new Promise((resolve, reject) => {
		console.log('文件上传中...')
		let result = {}

		// 解析请求文件事件
		busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
			const patt = /\.(jpg|jpeg|png|bmp|BMP|JPG|PNG|JPEG)$/
			const isPic = patt.test(filename)
			console.log(options.isImg)

			if (options.isImg) {
				if (!isPic) {
					resolve(new ErrorModel({
						message: '文件格式非图片类型'
					}))
					return
				}
			}

			console.log(fileType)

			if (options.intofileName==null) {
				var fileName = filename
				var _uploadFilePath = path.join(filePath, fileName)
				var saveTo = path.join(_uploadFilePath)
			}else{
				var _uploadFilePath = path.join(filePath, intofileName)
				var saveTo = path.join(_uploadFilePath)
			}

			console.log(_uploadFilePath)
			console.log(saveTo)

			// 文件保存到制定路径
			file.pipe(fs.createWriteStream(saveTo))

			// 文件写入事件结束
			file.on('end', function () {
				result = new SuccessModel({
					message: '文件上传成功',
					data: {
						url: `${ctx.origin}/${fileType}/${fileName}`
					}
				})
				console.log('文件上传成功！')
			})
		})

		// 解析结束事件
		busboy.on('finish', function () {
			console.log('文件上结束')
			resolve(result)
		})

		// 解析错误事件
		busboy.on('error', function (err) {
			console.log('文件上出错')
			resolve(new ErrorModel({
				message: '文件上传出错'
			}))
		})

		req.pipe(busboy)
	})

}


module.exports = uploadFile