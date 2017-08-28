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

    //绘制网格线
    var step=10;
    ctx.beginPath();
    ctx.lineWidth=1;
    ctx.strokeStyle='#000';
    for (var i = 0; i < step+1; i++) {
        ctx.moveTo(0,i*40);
        ctx.lineTo(w,i*40);
    }
    var x0=w/(cfg.data.length+1);
    console.log(x0);
    for(var j=0;j<=cfg.data.length+1;j++){
        ctx.moveTo(x0*j,0);
        ctx.lineTo(x0*j,h);
    }
    ctx.stroke();
    component.append(cns);
    return component;
};
