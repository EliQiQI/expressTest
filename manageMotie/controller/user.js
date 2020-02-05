var express=require('express');
var router=express.Router();
var usersModel=require('../model/usersModel')

async function login(req,res,next){
    console.log(req.body);
    let {account,pwd}=req.body;
    let backdata=await usersModel.userFind({
        //TODO:找一个数据
        username:account,
        password:pwd,

    });
    res.json(backdata);
}
async function register(req,res,next){
    console.log(req.body);
    let {account,pwd}=req.body;
    await usersModel.userSave({
        username:account,
        password:pwd,

    });
    res.send('register ok')
}
module.exports={
    login,
    register,
}