
const axios = require('axios')
const { decrypt, genPassword } = require('../utils/util')
const jwt = require('jsonwebtoken');
const { TOKEN_SECRETKEY } = require('../config/secret')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const exec=require('child_process').exec
const cmd=require('node-cmd')
const path = require('path')
// const { updateUserMessage } = require('./message')不能引用message否则message和user形成循环引用


const getslowloris = async function () {
	const slowlorisPath = 'http://localhost:8888/public/slowhttptest/slowloris/slowloris.html'
	console.log(slowlorisPath)
    return new SuccessModel({
        data: slowlorisPath,
    })
}

const getslowread = async function () {
	const slowreadPath = 'http://localhost:8888/public/slowhttptest/slowread/slowread.html'
	console.log(slowreadPath)
    return new SuccessModel({
        data: slowreadPath,
    })
}

const getslowpost = async function () {
	const slowpostPath = 'http://localhost:8888/public/slowhttptest/slowpost/slowpost.html'
	console.log(slowpostPath)
    return new SuccessModel({
        data: slowpostPath,
    })
}

const getbanddosfig = async function () {
	const banddosfigPath = 'http://localhost:8888/public/upload-files/BandDos/banddos_fig.png'
	console.log(banddosfigPath)
    return new SuccessModel({
        data: banddosfigPath,
    })
}

//对exec进行一个简单的封装，返回的是一个Promise对象，便于处理。
function doShellCmd(cmd){
    let str=cmd;
    let result={};
    return new Promise(function(resolve,reject){
        exec(str,function(err,stdout,stderr){
            if(err){
                console.log('err');
                result.errCode=500;
                result.data="操作失败！请重试";
                reject(result);
            }else{
                console.log('stdout ',stdout);//标准输出
                result.errCode=200;
                result.data="操作成功！";
                resolve(result);
            }
        })
    })
}

//对exec进行一个简单的封装，返回的是一个Promise对象，便于处理。
function doCmdCmd(cmd1){
    let str=cmd1;
    let result={};
    return new Promise(function(resolve,reject){
        cmd.run(str,function(err,stdout,stderr){
            if(err){
                console.log('err');
                result.errCode=500;
                result.data="操作失败！请重试";
                reject(result);
            }else{
                console.log('stdout ',stdout);//标准输出
                result.errCode=200;
                result.data="操作成功！";
                resolve(result);
            }
        })
    })
}


module.exports = {
    getslowloris,
    getslowread,
    getslowpost,
    getbanddosfig,
    doCmdCmd,
    doShellCmd
}
