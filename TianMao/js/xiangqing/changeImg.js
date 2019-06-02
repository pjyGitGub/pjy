function ChangeImg(){
    this.oShow = document.querySelector('.show');
    this.oGlass = document.querySelector('.glass');
    this.oImgList = document.querySelector('.imgList');
    this.oTitle = document.querySelector('.title');
    this.oPrice = document.querySelector('.price');
    this.id = location.search.substr(1);
    this.init();
}

ChangeImg.prototype = {
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
                for(key in data.data){
                    if(data.data[key].id == _this.id){
                        str += `
                            <li><img src="${data.data[key].img}"></li>
                        `
                        str += `
                            <li><img src="../img/xiangqing/2large.jpg"></li>
                            <li><img src="../img/xiangqing/3large.jpg"></li>
                            <li><img src="../img/xiangqing/4large.jpg"></li>
                            <li><img src="../img/xiangqing/5large.jpg"></li>
                        `
                    }
                }
                _this.oImgList.innerHTML = str;

            var str1 = "";
            for(key in data.data){
                if(data.data[key].id == _this.id){
                    str1 += `
                        <img src="${data.data[key].img}">
                    `
                }
            }
            str1 += `
                <div class="shade"></div>
            `
            _this.oShow.innerHTML = str1;

            var str2 = "";
            for(key in data.data){
                if(data.data[key].id == _this.id){
                    str2 += `
                        <img src="${data.data[key].img}">
                    `
                }
            }
            _this.oGlass.innerHTML = str2;

            var str3 = "";
            for(key in data.data){
                if(data.data[key].id == _this.id){
                    str3 += `
                        ${data.data[key].txt}
                        ${data.data[key].txt}
                        ${data.data[key].txt}
                        ${data.data[key].txt}
                        ${data.data[key].txt}
                        ${data.data[key].txt}
                    `
                }
            }
            _this.oTitle.innerHTML = str3;

            var str4 = "";
            str4 += `
                <span>价格</span>
            `
            for(key in data.data){
                if(data.data[key].id == _this.id){
                    str4 += `
                        <p>￥${data.data[key].big2}</p>
                    `
                }
            }
            _this.oPrice.innerHTML = str4;
            
        }).catch(function(info){
            console.log(info);
        })
    }
}

new ChangeImg();