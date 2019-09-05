"use strict";

$(function () {
  //获取localStorage中的数据
  var storage = window.localStorage;
  var storageStr = storage.carts ? storage.carts : ''; //转为对象

  var storageObj = convertStorageStrToStorageObj(storageStr); // 获取商品列表的main

  var oMain = $('.cart main');
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

  $.each(storageObj, function (key, value) {
    var good = value; //    console.log(key);
    //    console.log(good);

    var oUl = $('<ul></ul>'); //设置ul的属性class与自定义属性data-good-id

    oUl.attr('class', 'goodInfo');
    oUl.attr('data-good-id', key); // console.log(oUl);

    var str = "\n            <li><img src=\"".concat(good.src, "\" alt=\"\"></li>\n            <li>").concat(good.name, "</li>\n            <li>\uFFE5").concat(good.price, "</li>\n            <li>\n                <span class=\"iconfont icon-jianhao minus\"></span>\n                <span>").concat(good.num, "</span>\n                <span class=\"iconfont icon-jiahao plus\"></span>\n            </li>\n            <li class=\"total\">").concat(good.price * good.num, "</li>\n            <li class=\"iconfont icon-close_icon \"></li>\n        ");
    oUl.html(str);
    oMain.append(oUl); //获取所有的减按钮
    // $('.goodInfo li .minus').each(function(i){
    //     $(this).click(function(){
    //         console.log($(this));
    //     })   
    // })
  });

  function convertStorageStrToStorageObj(str) {
    if (!str) {
      return {};
    } else {
      return JSON.parse(str);
    }
  }
});