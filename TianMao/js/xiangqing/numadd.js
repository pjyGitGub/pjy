var addBtn = document.querySelector('.count .add');
var jianBtn = document.querySelector('.count .jian');
addBtn.onclick = function(){
    var num = this.previousElementSibling.value;
    num++;
    this.previousElementSibling.value = num;
}
jianBtn.onclick = function(){
    var num = this.nextElementSibling.value;
    if(num > 1){
        num--;
        this.nextElementSibling.value = num;
    }
}