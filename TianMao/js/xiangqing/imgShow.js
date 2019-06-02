function ImgShow(){
    this.osImgBox = document.querySelector('.imgList');
    this.osImgBoxLi = document.querySelectorAll('.imgList li');
    this.oShow = document.querySelector('.show');
    this.oShowImg = document.querySelector('.show>img');
    this.oGlass = document.querySelector('.glass');
    this.oGlassImg = document.querySelector('.glass>img');
    this.oShade = document.querySelector('.shade');
    this.init();
}
ImgShow.prototype = {
    init : function(){
        this.bindEvent();
    },
    changeSrc : function(smallSrc){
        this.oShowImg.src = smallSrc;
        this.oGlassImg.src = smallSrc;
    },
    show : function(){
        this.oShade.style.display = 'block';
        this.oGlass.style.display = 'block';
    },
    hide : function(){
        this.oShade.style.display = 'none';
        this.oGlass.style.display = 'none';
    },
    shadeMove : function(e,left,top){
        e = e || window.event;
        var
            l = e.clientX - left - this.oShade.offsetWidth / 2,
            t = e.clientY - top - this.oShade.offsetHeight / 2;
        l = l < 0 ? 0 : (l > 220 ? 220 : l);
        t = t < 0 ? 0 : (t > 220 ? 220 : t);
        this.oShade.style.left = l + 'px';
        this.oShade.style.top = t + 'px';
        this.glassImgMove(l,t);
    },
    glassImgMove : function(l,t){
        this.oGlassImg.style.left = -2 * l + 'px'; 
        this.oGlassImg.style.top = -2 * t + 'px'; 
    },
    bindEvent : function(){
        var _this = this;
        for(var i = 0 ; i < this.osImgBoxLi.length ; i++){
            this.osImgBoxLi[i].onmouseover = function(){
                _this.changeSrc(this.firstElementChild.src);
            }
        }
        this.oShow.onmouseover = function(){
            _this.show();
        }
        this.oShow.onmouseout = function(){
            _this.hide();
        }
        this.oShow.onmousemove = function(e){
            _this.shadeMove(e,this.offsetLeft,this.offsetTop);
        }
    }
}
setTimeout(() => {
    new ImgShow();
},300)
