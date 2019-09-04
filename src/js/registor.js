//注册页面
$(function(){
    //手机号输入
    $('.reg main form .reg_ipt_2').focus(function(){
        $(this).css('border-color','#87a7f4');
        $('.reg main form .hint1').css('display',"");
    });
    $('.reg main form .reg_ipt_2').blur(function(){
        var re_ipt_2 = /^1\d{10}$/;
        var str_ipt_2 = $(this).val();
        $(this).css('border-color','');
        if(re_ipt_2.test(str_ipt_2)){
            $('.reg main form .hint1').css('display',"");
        }else{
            $('.reg main form .hint1').css('display',"block");
        }
    })
    //获取验证码
    $('.reg main form .yanzhengma').click(function(){
        $('.reg main form .reg_ipt_3').val(
            function(){
                return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
            }
        )
    })
    //密码
    $('.reg main form .reg_ipt_4').focus(function(){
        $(this).css('border-color','#87a7f4');
        $('.reg main form .hint2').css('display','');
        //密码提示信息
        $('.reg main form .hint3').css('display','block');
    })
    $('.reg main form .reg_ipt_4').blur(function(){
        $(this).css('border-color','');
        var re_ipt_4 = /^[a-z0-9A-Z_]{6,16}$/;
        var str_ipt_4 = $(this).val();
        if(re_ipt_4.test(str_ipt_4)){
            $('.reg main form .hint2').css('display','');
        }else{
            $('.reg main form .hint2').css('display','block');
        }
        //密码提示信息
        $('.reg main form .hint3').css('display','none');
    })
    //确认密码
    $('.reg main form .reg_ipt_5').focus(function(){
        $(this).css('border-color','#87a7f4');
    })
    $('.reg main form .reg_ipt_5').blur(function(){
        $(this).css('border-color','');
        if($(this).val() == $('.reg main form .reg_ipt_4').val()){
            $('.reg main form .hint4').css('display','');
        }else{
            $('.reg main form .hint4').css('display','block');
        }
    })
    //对勾
    $('.reg main form .checkMark').click(function(){
        $(this).toggleClass('checkMark_1');
    })
    //注册
    // $('.reg main form').submit(function(){
    //     if($('.reg main form .hint1').attr('style') == 'display: block;' || $('.reg main form .hint2').attr('style') == 'display: block;' || $('.reg main form .hint4').attr('style') == 'display: block;' || $('.checkMark').hasClass('checkMark_1')){
    //         alert('请按提示正确填写信息'); 
    //     }else{
    //         alert('注册成功');
    //     }
    // })
    //获取注册按钮添加事件
    $('.reg main form .reg_ipt_6').click(function(){
        //判断是否可以注册
        //获取用户名以及密码框
        let oUname = $('.reg main form .reg_ipt_2');
        let oUpwd = $('.reg main form .reg_ipt_4');
        if($('.reg main form .hint1').attr('style') == 'display: block;' || $('.reg main form .hint2').attr('style') == 'display: block;' || $('.reg main form .hint4').attr('style') == 'display: block;' || $('.checkMark').hasClass('checkMark_1')){
            alert('请按提示正确填写信息'); 
        }else{
           //判断cookie是否存在
            //获取cookie
            // registors={"18435997356" : 123,"李四" : 456}
            //console.log($.cookie());
            let cookieStr = $.cookie('registors') ? $.cookie('registors') : '';
            let cookieObj = convertCookieStrToCookieObj(cookieStr);
            //console.log(cookieObj);
            //判断用户名是否存在
            if(oUname.val() in cookieObj){
                alert('用户名已存在');
                return;
            }else{
                cookieObj[oUname.val()] = oUpwd.val();
            }
            //重新创建cookie
            $.cookie('registors', JSON.stringify(cookieObj), {expires:7});
            alert('注册成功'); 
        }
    })

    //跳转登录页面
    $('.reg p a').click(function(){
        $(window).attr('location','login.html');
    })
    //将字符串转为对象
    function convertCookieStrToCookieObj(str) {
        if (!str) {
            return {};
        }
        return JSON.parse(str);
    }
})


