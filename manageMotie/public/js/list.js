let nav = $('#lists>span');
let mains = $('.main>div');
nav.on('click', tab);

function tab(e) {
    if (e.target.nodeName !== 'SPAN') {
        return;
    }
    let span = $(e.target);
    let index = Array.from(nav).indexOf(span[0]);
    nav.eq(index).css('background', '#0066CC').siblings().css('background', 'none');
    mains.eq(index).css('display', 'block').siblings().css('display', 'none');


}


$('#addmsg').on('click', function () {
    layer.open({
        type: 1,
        area: ['600px', '600px'],
        shadeClose: false, //点击遮罩关闭
        content: `
<form id="addmsg2">
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
    let givemsg = $('#givemsg');
    let nickname = $('#nickname');
    let likepoint = $('#likepoint');
    let submitBtn = $('#addmsg2>button');
    console.log(submitBtn);
    submitBtn.on('click', submitBtnHandle);

    function submitBtnHandle(e) {
        
        e.preventDefault();
        let msg = givemsg.val();
        let account = nickname.val();
        let likepointNumber = likepoint.val();
        $.ajax({
            type:'post',
            url:'/list/add',
            data:{
                msg,
                nickname:account,
                likepointNumber,
            },
            success:function(data){
                console.log($('.layui-layer-close1'))
                $('.layui-layer-close1').trigger('click');
                alert('添加成功');
                window.location.reload();
            }
        });
    }
});