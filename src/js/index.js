//热门商品轮播------------------------------
$(function(){
    //获取页面元素添加移入显示购物车事件
    $('.hotCommodity ul li').hover(
        function(){
            var index = $(this).index();
            $(this).css('box-shadow','5px 5px 20px 10px #f5f5f5 inset,-5px 5px 20px 10px #f5f5f5 inset,5px -5px 20px 10px #f5f5f5 inset,-5px -5px 20px 10px #f5f5f5 inset');
            $('.hotCommodity ul li .h6_1').eq(index).css('display','none');
            $('.hotCommodity ul li .h6_2').eq(index).css('display','block');
        },
        function(){
            var index = $(this).index();
            $(this).css('box-shadow','');
            $('.h6_1').css('display','block');
            $('.h6_2').css('display','none');
        }); 
    //小图轮播
    $('.hotCommodity ul li .black').hover(
        function(){
            $('.hotCommodity ul li img').eq(0).attr('src','img/hotC_black.png')
        }
    );
    $('.hotCommodity ul li .blue').hover(
        function(){
            $('.hotCommodity ul li img').eq(0).attr('src','img/hotC_blue.png')
        }
    );
    $('.hotCommodity ul li .white').hover(
        function(){
            $('.hotCommodity ul li img').eq(0).attr('src','img/hotC_white.png')
        }
    );
    //大图轮播
    $('.hotCommodity p .rightBtn').click(function(){
        //左按钮变粗 右按钮变细
        $(this).css('font-weight','normal');
        $('.hotCommodity p .leftBtn').css('font-weight','1000')
        //图片轮播
        $('.hotCommodity ul li:nth-of-type(1)').animate({left : -1216},300);
        $('.hotCommodity ul li:nth-of-type(2)').animate({left : -912},300);
        $('.hotCommodity ul li:nth-of-type(3)').animate({left : -608},300);
        $('.hotCommodity ul li:nth-of-type(4)').animate({left : -304},300);
        $('.hotCommodity ul li:nth-of-type(5)').animate({left : 0},300);
        $('.hotCommodity ul li:nth-of-type(6)').animate({left : 304},300);
        $('.hotCommodity ul li:nth-of-type(7)').animate({left : 608},300);
        $('.hotCommodity ul li:nth-of-type(8)').animate({left : 912},300);
    })
    //左按钮变细，右按钮变粗，图片回归
    $('.hotCommodity p .leftBtn').click(function(){
        $(this).css('font-weight','normal');
        $('.hotCommodity p .rightBtn').css('font-weight','1000')
        $('.hotCommodity ul li:nth-of-type(1)').animate({left : 0},300);
        $('.hotCommodity ul li:nth-of-type(2)').animate({left : 304},300);
        $('.hotCommodity ul li:nth-of-type(3)').animate({left : 608},300);
        $('.hotCommodity ul li:nth-of-type(4)').animate({left : 912},300);
        $('.hotCommodity ul li:nth-of-type(5)').animate({left : 1216},300);
        $('.hotCommodity ul li:nth-of-type(6)').animate({left : 1520},300);
        $('.hotCommodity ul li:nth-of-type(7)').animate({left : 1826},300);
        $('.hotCommodity ul li:nth-of-type(8)').animate({left : 2130},300);
    })    
})

//服饰包厢轮播--------------------
$(function(){
    //加入购物车显示隐藏
    //第一个大li，比较特殊
    $('.ClothingBags ul li:nth-of-type(1)').hover(function(){
        $(this).css('box-shadow','5px 5px 20px 10px #f5f5f5 inset,-5px 5px 20px 10px #f5f5f5 inset,5px -5px 20px 10px #f5f5f5 inset,-5px -5px 20px 10px #f5f5f5 inset');
    },
        function(){
            $(this).css('box-shadow','');
        }
    );
    //其余li
    $('.ClothingBags ul li:not(:nth-of-type(1)').hover(function(){
        var index = $(this).index();
        $(this).css('box-shadow','5px 5px 20px 10px #f5f5f5 inset,-5px 5px 20px 10px #f5f5f5 inset,5px -5px 20px 10px #f5f5f5 inset,-5px -5px 20px 10px #f5f5f5 inset');
        $('.ClothingBags ul li .h6_1').eq(index - 1).css('display','none');
        $('.ClothingBags ul li .h6_2').eq(index - 1).css('display','block');
    },
    function(){
        var index = $(this).index();
        $(this).css('box-shadow','');
        $('.h6_1').css('display','block');
        $('.h6_2').css('display','none');
    }); 
    //小图轮播
    //地平线商务8号旅行箱轮播
    $('.ClothingBags ul li .color9b9b9b').hover(
        function(){
            $('.ClothingBags ul li img').eq(1).attr('src','img/cloths_suitcase_black.png')
        }
    );
    $('.ClothingBags ul li .color4a4a4a').hover(
        function(){
            $('.ClothingBags ul li img').eq(1).attr('src','img/cloths_Suitcase_white.png')
        }
    );
    //地平线8号旅行箱轮播
    $('.ClothingBags ul li .white').hover(
        function(){
            $('.ClothingBags ul li img').eq(2).attr('src','img/cloths_suitcase_black.png')
        }
    );
    $('.ClothingBags ul li .color9b9b9b1').hover(
        function(){
            $('.ClothingBags ul li img').eq(2).attr('src','img/cloths_Suitcase_white.png')
        }
    );
    $('.ClothingBags ul li .color4990e2').hover(
        function(){
            $('.ClothingBags ul li img').eq(2).attr('src','img/cloths_suitcase_blue.png')
        }
    );
})


