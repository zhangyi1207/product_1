$(function(){
    //获取localStorage中的数据
    let storage = window.localStorage;
    let storageStr = storage.carts ? storage.carts : '';
    //转为对象
    let storageObj = convertStorageStrToStorageObj(storageStr);
    // 获取商品列表的main
    let oMain = $('.cart main')
    /*
        key : carts
        value : {
            "sp1" : {
                "name" : goodName,
                "src" : goodSrc,
                "price" : goodPrice,
                "num" : 1
            },
            "sp2" : {
                "name" : goodName,
                "src" : goodSrc,
                "price" : goodPrice,
                "num" : 1
            }
        }
    */
   //遍历对象
   //console.log(storageObj);//{sp2: {…}, sp3: {…}}
   $.each(storageObj,function(key,value){
       let good = value;
    //    console.log(key);
    //    console.log(good);
        let oUl = $('<ul></ul>');
        //设置ul的属性class与自定义属性data-good-id
        oUl.attr('class','goodInfo');
        oUl.attr('data-good-id',key);
        // console.log(oUl);
        let str = `
            <li><img src="${good.src}" alt=""></li>
            <li>${good.name}</li>
            <li>￥${good.price}</li>
            <li>
                <span class="iconfont icon-jianhao minus"></span>
                <span>${good.num}</span>
                <span class="iconfont icon-jiahao plus"></span>
            </li>
            <li class="total">${good.price * good.num}</li>
            <li class="iconfont icon-close_icon "></li>
        `;
        oUl.html(str);
        oMain.append(oUl);

        //获取所有的减按钮
        // $('.goodInfo li .minus').each(function(i){
        //     $(this).click(function(){
        //         console.log($(this));
        //     })   
        // })

   })


    function convertStorageStrToStorageObj(str){
        if(!str){
            return {};
        }else{
            return JSON.parse(str);
        }
    }
})