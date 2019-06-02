function List(){
    this.oList = document.querySelector('.list2');
    this.init();
}
List.prototype = {
    init : function(){
        this.getDate()
    },
    getDate : function(){
        var _this = this;
        axios({
            method : 'get',
            url : 'http://localhost/TianMao/json/list.json',
            data : {}
        }).then(function(data){
            var str = "";
            for(var i = 0 ; i < data.data.length; i++){
                str += `
                    <div class="list2_1">
                        <h2><em class="iconfont ${data.data[i].em}"></em>${data.data[i].name}</h2>
                        <a href="liebiao.html">${data.data[i].a1}</a> /
                        <a href="liebiao.html">${data.data[i].a2}</a> /
                        <a href="liebiao.html">${data.data[i].a3}</a>
                    </div>
                `
            }
            _this.oList.innerHTML = str;

            for(var k = 0 ; k < data.data1.length ; k++){
                str += `
                <div class="double">
                    <a href="" class="close">X</a>`
                str += `
                    <div class="double_1">
                    <span>${data.data1[k].title}</span>
                    <hr>
                    <span class="list2_2">`
                    for(var k = 1 ; k < data.data1.length ; k++){
                        str += `<a href="liebiao.html">${data.data1[k].b}</a>`
                    }
                str += `      
                        </span>
                    </div>
                </div>
               `
            }
            _this.oList.innerHTML = str;
        })
    }
}
new List();