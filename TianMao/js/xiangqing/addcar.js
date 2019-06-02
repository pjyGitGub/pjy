var oBtn = document.querySelector('.btnBox');
var id = location.search.substr(1);
var productInfo = {};
oBtn.onclick = function(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.className == "addcar"){
        var count = productInfo[id];
        if(!count){
            count = 1;
        }else{
            count++;
        }
        productInfo[id] = count;
        setCookie('data.data',JSON.stringify(productInfo),7);
    }
}