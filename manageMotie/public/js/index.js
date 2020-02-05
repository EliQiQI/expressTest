let account1=$('#login input').eq(0);
let password1=$('#login input').eq(1);
let code1=$('#login input').eq(2);

let account2=$('#register input').eq(0);
let password2=$('#register input').eq(1);
let code2=$('#register input').eq(2);

let changeReg=$('#login #change-reg');
let changeLog=$('#register #change-log');
let submit1=$('#login button');
let submit2=$('#register button')
let register=$('#register');
let login=$('#login');

submit1.on('click',clicksubmitHandle);
submit2.on('click',clicksubmitHandle2);
changeReg.on('click',clickchangeRegHandle);
changeLog.on('click',clickchangeLogHandle);
function clicksubmitHandle(e){
    e.preventDefault();
    let sendMsg={
        type:'login',
        account:account1.val(),
        pwd:password1.val(),
        code:code1.val(),
    }
    $.ajax({
        type:'post',
        url:'/users/login',
        data:sendMsg,
        success:function(backData){
            console.log(backData);
            if(backData){
                console.log(window.location.href);
                let url=window.location.href;
                window.location.href=url+"list";
                
            }
        }
    });
}
function clicksubmitHandle2(e){
    e.preventDefault();
    let sendMsg={
        type:'login',
        account:account2.val(),
        pwd:password2.val(),
        code:code2.val(),
    }
    $.ajax({
        type:'post',
        url:'/users/register',
        data:sendMsg,
        success:function(backData){
            alert(backData);
            console.log(changeLog);
            changeLog.trigger('click');
        }
    });
}
function clickchangeRegHandle(e){
    login.css({
        display:'none',
    }).siblings().css({
        display:'block',
    })
}

function clickchangeLogHandle(e){
    register.css({
        display:'none',
    }).siblings().css({
        display:'block',
    })
}
