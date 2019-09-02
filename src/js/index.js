//热门商品轮播
$(function(){
    //获取页面元素添加事件
    $('.hotCommodity ul li').mouseenter(function(){
        var index = $(this).index();
        $(this).css('box-shadow','5px 5px 20px 10px #f5f5f5 inset,-5px 5px 20px 10px #f5f5f5 inset,5px -5px 20px 10px #f5f5f5 inset,-5px -5px 20px 10px #f5f5f5 inset');
        // $('.hotCommodity ul li h6').css()
    });
    $('.hotCommodity ul li').mouseleave(function(){
        var index = $(this).index();
        $(this).css('box-shadow','');
    });
})

