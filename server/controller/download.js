const { exec } = require('../db/mysql')
const axios = require('axios')
const { decrypt, genPassword } = require('../utils/util')
const jwt = require('jsonwebtoken');
const { TOKEN_SECRETKEY } = require('../config/secret')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const path = require('path')
const fs = require("fs")
// const { updateUserMessage } = require('./message')不能引用message否则message和user形成循环引用

function PcapfileRead(MyUrl){
    let ret=[];
    let rootpath = MyUrl;
    function myReadfile(MyUrl) {
        let files=fs.readdirSync(MyUrl);
        files.forEach(file => {
            //拼接获取绝对路径，fs.stat(绝对路径,回调函数)
            let fPath = path.join(MyUrl, file);
            let stats=fs.statSync(fPath);
            if (stats.isFile()) {
                //stat 状态中有两个函数一个是stat中有isFile ,isisDirectory等函数进行判断是文件还是文件夹
                console.log(file)
                console.log(fPath)
                ret.push({"filefield":fPath.replace(rootpath,'').replace(/\\/g,'/'),"filename":file})
            }
            else {
                myReadfile(fPath)
            }
            
        })
    }
    myReadfile(MyUrl);
    return ret;
}


/**
 * 获取用户列表
 * @param {*} param 
 */
const getPacpDownload = async (param) => {
    const { current = 0, pageSize = 10, username, startTime, endTime } = param
    const PcapFilePath = path.join(__dirname, '../public/tcpdump/data')
    console.log(PcapFilePath)
    var ret=PcapfileRead(PcapFilePath)
    console.log(ret)

    const res = ret
    const res2 = [{total:res.length}]
    return new SuccessModel({
        data: {
            list: res,
            current: parseInt(current),
            pageSize: parseInt(pageSize),
            total: res2[0].total
        }
    })
}


function CsvfileRead(MyUrl){
    let ret=[];
    let rootpath = MyUrl;
    function myReadfile(MyUrl) {
        let files=fs.readdirSync(MyUrl);
        files.forEach(file => {
            //拼接获取绝对路径，fs.stat(绝对路径,回调函数)
            let fPath = path.join(MyUrl, file);
            let stats=fs.statSync(fPath);
            if (stats.isFile()) {
                //stat 状态中有两个函数一个是stat中有isFile ,isisDirectory等函数进行判断是文件还是文件夹
                console.log(file)
                console.log(fPath)
                ret.push({"filefield":fPath.replace(rootpath,'').replace(/\\/g,'/'),"filename":file})
            }
            else {
                myReadfile(fPath)
            }
            
        })
    }
    myReadfile(MyUrl);
    return ret;
}


/**
 * 获取用户列表
 * @param {*} param 
 */
const getCsvDownload = async (param) => {
    const { current = 0, pageSize = 10, username, startTime, endTime } = param
    const CsvFilePath = path.join(__dirname, '../public/cicflowmeter/data')
    console.log(CsvFilePath)
    var ret=CsvfileRead(CsvFilePath)
    console.log(ret)

    const res = ret
    const res2 = [{total:res.length}]
    return new SuccessModel({
        data: {
            list: res,
            current: parseInt(current),
            pageSize: parseInt(pageSize),
            total: res2[0].total
        }
    })
}

function PdffileRead(MyUrl){
    let ret=[];
    let rootpath = MyUrl;
    function myReadfile(MyUrl) {
        let files=fs.readdirSync(MyUrl);
        files.forEach(file => {
            //拼接获取绝对路径，fs.stat(绝对路径,回调函数)
            let fPath = path.join(MyUrl, file);
            let stats=fs.statSync(fPath);
            if (stats.isFile()) {
                //stat 状态中有两个函数一个是stat中有isFile ,isisDirectory等函数进行判断是文件还是文件夹
                console.log(file)
                console.log(fPath)
                ret.push({"filefield":fPath.replace(rootpath,'').replace(/\\/g,'/'),"filename":file})
            }
            else {
                myReadfile(fPath)
            }
            
        })
    }
    myReadfile(MyUrl);
    return ret;
}


/**
 * 获取用户列表
 * @param {*} param 
 */
const getPdfDownload = async (param) => {
    const { current = 0, pageSize = 10, username, startTime, endTime } = param
    const PdfFilePath = path.join(__dirname, '../public/pdf/CrTe2')
    console.log(PdfFilePath)
    var ret=PdffileRead(PdfFilePath)
    console.log(ret)

    const res = ret
    const res2 = [{total:res.length}]
    return new SuccessModel({
        data: {
            list: res,
            current: parseInt(current),
            pageSize: parseInt(pageSize),
            total: res2[0].total
        }
    })
}




module.exports = {
    
    getPacpDownload,
    getCsvDownload,
    getPdfDownload
    
}