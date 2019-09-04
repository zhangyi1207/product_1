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
    //自动登录
    $('.login form .autoLogin span').click(
        function(){
            $(this).toggleClass('spanColor');
        }
    )
    //设置登录
    //获取页面元素对象
    let oUname = $('.login form .ipt_1');
    let oUpwd = $('.login form .ipt_2');
    //给登录加事件
    $('.login form .ipt_3').click(function(){
        if($('.login form .login_id').attr('style') == 'display: block;'){
            alert('用户名格式不正确');
        }else{
            //判断用户名是否存在
            //获取cookie
            let cookieStr = $.cookie('registors') ? $.cookie('registors') : '';
            let cookieObj = convertCookieStrToCookieObj(cookieStr);
            if(oUname.val() in cookieObj){
                if(oUpwd.val() == cookieObj[oUname.val()]){
                    alert('登录成功');
                    $(window).attr('location','index.html');
                }else{
                    alert('密码不正确');
                    return;
                }
            }else{
                alert('用户名不存在');
                return;
            }
        }
    })

    //跳转注册页面
    //获取注册按钮
    $('.login form .autoLogin .registor').click(function(){
        $(window).attr('location','register.html');
    })
    function convertCookieStrToCookieObj(str) {
        if (!str) {
            return {};
        }
        return JSON.parse(str);
    }
})
