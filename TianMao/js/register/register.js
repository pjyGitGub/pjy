function Register(){
    this.uname = document.querySelector('.unameTxt');
    this.upwd = document.querySelector('.pwdTxt');
    this.uphone = document.querySelector('.phoneTxt');
    this.oBtn = document.querySelector('.btn');
    this.init();
}
Register.prototype = {
    init : function(){
        this.eventBind();
    },
    getDate : function(){
        var _this = this;
        axios({
            method : 'get',
            url : 'http://localhost/TianMao/php/register.php',
            data : {
                uname : _this.uname.value,
                upwd : _this.upwd.value,
                uphone : _this.uphone.value
            }
        }).then(function(data){
            if(data.state == '1'){
                alert(data.info);
                location.href = 'http://localhost/TianMao/html/login.html';
            }else{
                alert(data.info);
            }
        })
    },
    eventBind : function(){
        this.oBtn.addEventListener('click',this.getDate.bind(this));
    },
}
new Register();