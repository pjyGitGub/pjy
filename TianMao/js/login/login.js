function Login(){
    this.uname = document.querySelector('.unameTxt');
    this.pwd = document.querySelector('.pwdTxt');
    this.oBtn = document.querySelector('.btn');
    this.init();
}
Login.prototype = {
    init : function(){
        this.eventBind();
    },
    getDate : function(){
        var _this = this;
        axios({
            method : 'get',
            url : 'http://localhost/TianMao/php/login.php',
            data : {
                uname : _this.uname.value,
                upwd : _this.pwd.value
            }
        }).then(function(data){
            if(data.state == '1'){
                alert(data.info);
                location.href = 'http://localhost/TianMao/html/index.html';
            }else{
                alert(data.info);
            }
        }).catch(function(info){
            console.log(info);
        })
    },
    eventBind : function(){
        this.oBtn.addEventListener('click',this.getDate.bind(this));
    }
}
new Login();