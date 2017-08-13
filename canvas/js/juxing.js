/**
 * Created by oldKing on 2017/7/28.
 */
function oldking(option){
    this._init(option);
}
oldking.prototype = {
    _init:function (option) {
        this.x=option.x || 0;
        this.y=option.y || 0;
        this.w=option.w || 0;
        this.h=option.h || 0;
        this.rotation=option.rotation || 0;
        this.opacity = option.opacity===0? 0 : option.opacity || 1;
        this.scaleX=option.scaleX || 1;
        this.scaleY=option.scaleY || 1;
        this.strokeStyle=option.strokeStyle || 'black';
        this.fillStyle=option.fillStyle || 'black';
    },
    rander:function(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.rotate(this.rotation*Math.PI/180);
        ctx.globalAlpha=this.opacity;
        ctx.scale(this.scaleX,this.scaleY);
        ctx.rect(this.x,this.y,this.w,this.h);
        ctx.fillStyle=this.fillStyle;
        ctx.fill();
        ctx.strokeStyle=this.strokeStyle;
        ctx.stroke();
        ctx.restore();
    }
}
