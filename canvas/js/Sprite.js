/**
 * Created by Administrator on 2017/7/28.
 */
function Sprite(option){
    this._init(option);
}
Sprite.prototype={
    _init:function(option){
        this.x=option.x===0 ? 0 : (option.x || 0);
        this.y=option.y===0 ? 0 : (option.y || 0);
        this.w=option.w || 256;
        this.h=option.h || 256;
        this.fps=option.fps || 100;
        this.originW=option.originW || 256;
        this.originH=option.originH || 256;
        this._dirIndex=0;
        this.src=option.src || '';
    },
    render:function(ctx){
        var img=new Image();
        img.src=this.src;
        var self=this;
        img.onload= function () {
            var frameIndex=0;
            setInterval(function () {
                ctx.clearRect( 0,0,ctx.canvas.width,ctx.canvas.height);
                ctx.drawImage(img,frameIndex*self.originW,self._dirIndex*self.originH,self.originW,self.originH,self.x,self.y, self.w, self.h);
                frameIndex++;
                frameIndex%=8;
            },self.fps);
        }
    },
    changeDir:function(dir){
        switch (dir){
            case "zuo":
                this._dirIndex=0;
                break;
            case "zuoshang":
                this._dirIndex=1;
                break;
            case "shang":
                this._dirIndex=2;
                break;
            case "youshang":
                this._dirIndex=3;
                break;
            case "you":
                this._dirIndex=4;
                break;
            case "youxia":
                this._dirIndex=5;
                break;
            case "xia":
                this._dirIndex=6;
                break;
            case "zuoxia":
                this._dirIndex=7;
                break;
            default:
                this._dirIndex=0;
                break;
        }
    }
};