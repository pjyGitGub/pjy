function Show2(){
    this.oBox2 = document.querySelector(".box2 a");
    this.oBrand = document.querySelector(".box3");
    this.oList4 = document.querySelector(".list4");
    this.init();
}
Show2.prototype = {
    init : function(){
        this.getDate();
    },
    getDate : function(){
        var _this = this;
        axios({
            method : 'get',
            url : 'http://localhost/TianMao/json/show2.json',
            data : {}
        }).then(function(data){
            var str = "";
            for(var i = 0 ; i < data.data.length ; i++){
                str += `
                <div class="box2_1">
                    <img src="${data.data[i].img}">
                    <div class="box2_11">${data.data[i].txt}</div>
                    <div class="price2">
                        <span class="act2">
                            <span class="rmb2">¥</span>
                            <span class="big2">${data.data[i].big2}</span>
                        </span>
                        <span class="tag gray2"><span class="rmb">¥</span>${data.data[i].small2}.00</span>
                    </div>
                </div>
                `
            }
            _this.oBox2.innerHTML = str;

            var str1 = "";
            str1 += `
                <div class="title">
                    <span>BRABD</span>
                    美容护肤热卖品牌
                </div>
            `;
            for(var k = 0 ; k < data.data1.length ; k++){
                str1 += `
                <a href="liebiao.html" class="brand">
                    <img src="${data.data1[k].img}">
                    <div class="brand_title">${data.data1[k].txt}</div>
                </a>
                `
            }
            _this.oBrand.innerHTML = str1;

            var str2 = "";
            str2 += `<p>最热 HOT</p>`;
            for(var i = 0 ; i < data.data2.length ; i++){
                str2 += `
                    <a href="liebiao.html">${data.data2[i].a}</a></br>
                `
            }
            _this.oList4.innerHTML = str2;
        })
    }
}
new Show2();