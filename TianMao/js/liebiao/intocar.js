var oContent = document.querySelector('.content');
var productInfo = {};
oContent.onclick = function(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.tagName == "A" && target.className == "btn"){
        var id = target.parentNode.parentNode.getAttribute('data-id');
        var count = productInfo[id];
        if(!count){
            count = 1;
        }else{
            count++;
        }
    }
    productInfo[id] = count;
    setCookie('data.data',JSON.stringify(productInfo));
}
