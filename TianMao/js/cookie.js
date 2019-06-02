//写入cookie
/** 
 * 变量
    cookie名称
    cookie的值
    存储的时间
*/

//'name=ws;path=/;expires=10'
function setCookie(cName,cVal,expires){
    var d = new Date();
    d.setDate(d.getDate() + expires);
    document.cookie = cName + '=' + cVal + ';path=/;expires=' + d.toGMTString();
}







//读取cookie
//"sex=nan; name=wangshuai; password=8888; id=1000000000; age=2"
function getCookie(cName){
    //获取所有的cookie
    var cookieStr = document.cookie;
    var cookieArr = cookieStr.split('; ');
    //遍历数组
    for(var i = 0,k = cookieArr.length ; i < k ; i++){
        var items = cookieArr[i].split('=');
        if(items[0] == cName){
            return items[1];
        }
    }
}




//删除cookie

function removeCookie(cName){
    setCookie(cName,null,-1);    //设置成过期cookie
}