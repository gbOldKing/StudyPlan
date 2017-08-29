/**
 * Author:oldking
 * Created by Administrator on 2017/8/27.
 * Description:散点图表组件对象
 */

var H5ComponentPolyline = function (name,cfg) {
    var component=new H5ComponentBase(name,cfg);
    var w=cfg.width;
    var h=cfg.height;
    var cns=document.createElement('canvas');
    var ctx=cns.getContext('2d');
    cns.width=ctx.width=w;
    cns.height=ctx.height=h;


    //绘制网格线（背景层）
    var step=10;
    ctx.beginPath();
    ctx.lineWidth=1;
    ctx.strokeStyle='#666';
    for (var i = 0; i < step+1; i++) {
        ctx.moveTo(0,i*40);
        ctx.lineTo(w,i*40);
    }
    var x0=w/(cfg.data.length+1);
    for(var j=0;j<=cfg.data.length+1;j++){
        ctx.moveTo(x0*j,0);
        ctx.lineTo(x0*j,h);
    }
    ctx.stroke();
    component.append(cns);

    //绘制折线数据（数据层）

    //绘制各数据点
    var cns=document.createElement('canvas');
    var ctx=cns.getContext('2d');
    cns.width=ctx.width=w;
    cns.height=ctx.height=h;
    ctx.beginPath();
    var x=0;
    var y=0;
    for(var i=0;i<cfg.data.length;i++){
        var item=cfg.data[i];
        x=w/(cfg.data.length+1)*(i+1);
        y=h*(1-item[1]);
        ctx.moveTo(x,y);
        ctx.arc(x,y,5,0,2*Math.PI);
    }
    ctx.fillStyle='#f00'
    ctx.fill();

    //绘制连接线
    ctx.beginPath();
    var beginX=w/(cfg.data.length+1);
    var beginY=h*(1-cfg.data[0][1]);
    ctx.moveTo(beginX,beginY);
    for(var i=0;i<cfg.data.length;i++){
        var item=cfg.data[i];
        x=w/(cfg.data.length+1)*(i+1);
        y=h*(1-item[1]);
        ctx.fillStyle=item[2]?item[2]:'#333';
        ctx.fillText((item[1]*100>>0)+'%',x-10,y-15);
        ctx.lineTo(x,y);
    }
    ctx.lineWidth=3;
    ctx.strokeStyle='#ff8878';
    ctx.stroke();
    //绘制阴影
    ctx.lineTo(x,h);
    ctx.lineTo(beginX,h);
    ctx.fillStyle='rgba(255,135,120,.3)';
    ctx.fill();

    component.append(cns);
    return component;
};
