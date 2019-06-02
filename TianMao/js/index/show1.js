function Show1(){
    this.oList = document.querySelector('.list3');
    this.init();
}
Show1.prototype = {
    init : function(){
        this.getDate();
    },
    getDate : function(){
        var _this = this;
        axios({
            method : 'get',
            url : 'http://localhost/TianMao/json/show1.json',
            data : {}
        }).then(function(data){
            var str = "";
            for(var i = 0 ; i < data.data.length ; i++){
                str += `
                    <li>
                        <div class="discount">
                            <b class="big">${data.data[i].big}</b><b class="small">${data.data[i].small}</b>
                            <p class="dis-txt">折</p>  
                        </div>
                        <a href="liebiao.html"><img src="${data.data[i].img}" class="show1"></a>
                        <div class="desc">
                            <img src="${data.data[i].guoqi}">
                            <span>${data.data[i].pinpai}</span>
                        </div>
                        <div class="title">${data.data[i].title}</div>
                        <div class="title_des">${data.data[i].title_des}</div>
                        <div class="left">
                            <div class="price">
                                <span class="act">
                                    <span class="rmb">¥</span>
                                    <span class="big">${data.data[i].big1}</span>
                                </span>
                                <span class="tag gray"><span class="rmb">¥</span>${data.data[i].small1}</span>
                            </div>
                            <span class="sold">已售${data.data[i].sold}件</span>
                        </div>
                        <a href="" class="qiang">马上抢</a>
                    </li>
                `
            }
            _this.oList.innerHTML = str;
        }).catch(function(info){
            console.log(info)
        })
    }
}
new Show1();
