class List{
    constructor(data){
        this.data=data;
    }
    init(){
        this.pop();
        

    }

    pop(){
        let self=this;
        layer.open({
            type: 1,
            area: ['600px', '600px'],
            shadeClose: false, //点击遮罩关闭
            content: `
    <form id="addmsg3">
        <div class="form-group">
        <label for="givemsg">留言</label>
        <input type="text" class="form-control" id="givemsg" aria-describedby="emailHelp">
        </div>
    
        <div class="form-group">
        <label for="nickname">昵称</label>
        <input type="text" class="form-control" id="nickname">
        </div>
    
        <div class="form-group">
        <label for="likepoint">积分</label>
        <input type="text" class="form-control" id="likepoint">
        </div>
    
        <div class="form-group">
        <label for="uploadimg">图片上传</label>
        <input type="file" class="form-control" id="uploadimg">
        </div>
    
        <button type="submit" class="btn btn-primary">提交</button>
    </form>
        `
        });
        
        self.fullData();
        self.submitData();
    }
    pop2(){
        let self=this;
        layer.open({
            type: 1,
            area: ['600px', '600px'],
            shadeClose: false, //点击遮罩关闭
            content: `
    <form id="addmsg3">
        <div class="form-group">
        <label for="givemsg">留言</label>
        <input type="text" class="form-control" id="givemsg" aria-describedby="emailHelp" disabled>
        </div>
    
        <div class="form-group">
        <label for="nickname">昵称</label>
        <input type="text" class="form-control" id="nickname" disabled>
        </div>
    
        <div class="form-group">
        <label for="likepoint">积分</label>
        <input type="text" class="form-control" id="likepoint" disabled>
        </div>
    
        <div class="form-group">
        <label for="uploadimg">图片上传</label>
        <input type="file" class="form-control" id="uploadimg" disabled>
        </div>
    
    </form>
        `
        });
        
        self.fullData();        
    }
    fullData(){
        $('#addmsg3 #givemsg').val(this.data.msg);
        $('#addmsg3 #nickname').val(this.data.msgAuthor);
        $('#addmsg3 #likepoint').val(this.data.likeNum);
    }

    submitData(){
        let submit=$('#addmsg3>button');
        submit.on('click',this.submitHandle.bind(this));
    }
    submitHandle(e){
        e.preventDefault();
        let msg=$('#addmsg3 #givemsg').val();
        let msgAuthor=$('#addmsg3 #nickname').val();
        let likeNum=$('#addmsg3 #likepoint').val();
        let id=this.data._id;
        console.log(msg,id);
        $.ajax({
            type:'post',
            url:'list/edit',
            data:{
                msg,
                msgAuthor,
                likeNum,
                id,
            },
            success:function(data){
                window.location.reload();
            }
        })
    }
}