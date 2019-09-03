//登录界面的js样式
$(function(){
    //第一个input
    $('.login form .ipt_1').focus(function(){
        $(this).css('border-color','#87a7f4');
        $('.login form .login_id').css('display','');
    })
    $('.login form .ipt_1').blur(function(){
        $(this).css('border-color','');
        //正则验证账号
        var re = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
        var re1 = /^1\d{10}$/;
        var str = $(this).val();
        if(re.test(str) | re1.test(str)){
            $('.login form .login_id').css('display','');
        }else{
            $('.login form .login_id').css('display','block');
        }
    })
    //第二个input
    $('.login form .ipt_2').focus(function(){
        $(this).css('border-color','#87a7f4');
    })
    $('.login form .ipt_2').blur(function(){
        $(this).css('border-color','');
    })
})
