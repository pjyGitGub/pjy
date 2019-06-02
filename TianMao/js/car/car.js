function Car(){
    this.oContent = document.querySelector('.content');
    this.strCookie = getCookie('data.data');
    this.objCookie = JSON.parse(this.strCookie);
    this.init();
}
Car.prototype = {
    init : function(){
        this.getDate();
    },
    getDate : function(){
        var _this = this;
        axios({
            method : 'get',
            url : 'http://localhost/TianMao/json/liebiao.json',
            data : {}
        }).then(function(data){
            var str = "";
            str += `
            <div class="list_title">
                <li><input type="checkbox"><label> 全选</label></li>
                <li>商品信息</li>
                <li>单价</li>
                <li>数量</li>
                <li>小计</li>
                <li>操作</li>
            </div>
            `
            for(key in _this.objCookie){
                for(var i = 0 ; i < data.data.length ; i++){
                    if(key == data.data[i].id){
                        str += `
                        <div class="box" data-Id="${data.data[i].id}">
                            <div class="check">
                                <input type="checkbox">
                            </div>
                            <div class="con">
                                <div class="img">
                                    <a href=""><img src="${data.data[i].img}"></a>
                                </div>
                                <div class="txt1">
                                    <a href="">${data.data[i].txt}</a>
                                </div>
                                <div class="txt2">
                                    <span>规格/型号</span>
                                    <span></span>
                                </div>
                                <div class="largeImg">
                                    <img src="${data.data[i].img}">
                                </div>
                            </div>
                            <div class="price">
                                <span class="old">￥${data.data[i].small2}</span>
                                <span class="new">￥${data.data[i].big2}</span>
                            </div>
                            <div class="count">
                                <button class="jian">-</button>
                                <input type="text" value="${_this.objCookie[key]}">
                                <button class="add">+</button>
                            </div>
                            <div class="smallAdd">
                                <span>￥${data.data[i].big2 * _this.objCookie[key]}</span>
                            </div>
                            <div class="del">
                                <a href="javascript:void(0)" class="delete" data-id="${data.data[i].id}">删 除</a>
                            </div>
                        </div>
                        `
                    }
                }
            }
            _this.oContent.innerHTML = str;
        }).catch(function(info){
            console.log(info);
        })
    }
}
new Car();