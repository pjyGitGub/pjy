function Liebiao(){
    this.oBox2 = document.querySelector(".content");
    this.init();
}
Liebiao.prototype = {
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
            for(var i = 0 ; i < data.data.length ; i++){
                str += `
                <div class="box2_1" data-id="${data.data[i].id}">
                    <a href="../html/xiangqing.html?${data.data[i].id}"><img src="${data.data[i].img}"></a>
                    <div class="box2_11">${data.data[i].txt}</div>
                    <div class="price2">
                        <span class="act2">
                            <span class="rmb2">¥</span>
                            <span class="big2">${data.data[i].big2}</span>
                        </span>
                        <span class="tag gray2"><span class="rmb">¥</span>${data.data[i].small2}.00</span>
                        <a href="##" class="btn">加入购物车</a>
                    </div>
                </div>
                `
            }
            _this.oBox2.innerHTML = str;
        })
    }
}
new Liebiao();