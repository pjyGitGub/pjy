var StrCookie = getCookie('data.data');
var ObjCookie = JSON.parse(this.StrCookie);
var oCon = document.querySelector('.content');
oCon.onclick = function(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    //删除商品
    if(target.tagName == "A" && target.className == "delete"){
        var id = target.parentNode.parentNode.getAttribute('data-Id');
        delete ObjCookie[id];
        setCookie('data.data',JSON.stringify(ObjCookie),7);
        new Car();
    }
    //商品累加
    if(target.className == 'add'){
        var num = target.previousElementSibling.value;
        num++;
        target.previousElementSibling.value = num;
    }
    //商品累减
    if(target.className == 'jian'){
        var num = target.nextElementSibling.value;
        if(num > 1){
            num--
        }else{
            num = 1;
        }
        target.nextElementSibling.value = num;
    }
}