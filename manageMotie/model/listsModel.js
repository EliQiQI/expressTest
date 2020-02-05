const mongoose=require("../utils/database");
const Schema=mongoose.Schema;
const listsSchema=new Schema({
    msg:String,
    msgAuthor:String,
    likeNum:Number,
    yourPic:String,
})

const Lists=mongoose.model('lists',listsSchema);

//添加消息

const ListsSave=function(msgInfo){
    var msg=new Lists(msgInfo);
    return msg.save();
}

const ListsShow=function(page,limit){
    page=parseInt(page);
    limit=parseInt(limit);
    console.log(page,limit)
    return Lists.find().skip((page-1)*limit).limit(limit);
}

const ListsCount=function(){
    return Lists.find().count();
}
const ListsDelete=function(_id){
    return Lists.deleteOne({"_id":_id},function (err,doc) {
        if(err)
        {
            console.log(err)
            return
        }
        console.log(doc)
    })
}
const ListsUpdate=function(listOptions){
    let {msg,msgAuthor,likeNum,id}=listOptions;
    let wherestr={'_id':id};
    let updatestr={
        msg,
        msgAuthor,
        likeNum,
    }
    return Lists.update(wherestr,updatestr);
}
module.exports={
    ListsSave,
    ListsShow,
    ListsCount,
    ListsDelete,
    ListsUpdate
}