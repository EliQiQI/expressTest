/*
 * @Author: your name
 * @Date: 2020-01-13 19:51:16
 * @LastEditTime: 2020-01-15 09:39:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /manageMotie/controller/listController.js
 */

var express = require('express');
var router = express.Router();
var listsModel=require('../model/listsModel');

async function mypage(req,res,next){



        let Msgdata=await listsModel.ListsShow();

        res.render('list',{data:'hahaha',Msgdata})

    
}
async function returnData(req,res,next){
    let all=await listsModel.ListsCount();
    let {page,limit}=req.query;
    console.log(page,limit);
    let Msgdata=await listsModel.ListsShow(page,limit);
    res.json({
        "code": 0,
        "msg": "",
        "count": all,
        "data":Msgdata,
    });
}
async function deleteData(req,res,next){
    let {_id}=req.body;
    let data=await listsModel.ListsDelete(_id);
    res.send('ok');
}
async function addData(req,res,next){
    console.log(req.body);
    let {msg,nickname,likepointNumber}=req.body;
    await listsModel.ListsSave({
        msg,
        msgAuthor:nickname,
        likeNum:likepointNumber,
        yourPic:'img in here',
    })
    res.send('ok');
}
async function editData(req,res,next){
    let {msg,msgAuthor,likeNum,id}=req.body;
    let backdata=await listsModel.ListsUpdate({
        msg,
        msgAuthor,
        likeNum,
        id
    })
    res.send(backdata);
}
module.exports={
    mypage,
    returnData,
    deleteData,
    addData,
    editData,
}