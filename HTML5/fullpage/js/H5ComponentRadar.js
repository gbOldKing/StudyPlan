/**
 * Author:oldking
 * Created by Administrator on 2017/8/27.
 * Description:雷达图表组件对象
 */

var H5ComponentRadar = function (name, cfg) {
    var component = new H5ComponentBase(name, cfg);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = cfg.width;
    canvas.height = cfg.height;

    var x0 = canvas.width / 2,
        r0 = canvas.width / 2,
        y0 = canvas.height / 2;
    var step = cfg.data.length;
    //绘制网格背景
    var isBlue = false;
    for (var s = 10; s > 0; s--) {
        ctx.beginPath();
        for (var i = 0; i < step; i++) {
            var rad = (360 / step) * (Math.PI / 180) * i;
            var x = x0 + Math.sin(rad) * r0 * (s / 10);
            var y = y0 + Math.cos(rad) * r0 * (s / 10);
            /*ctx.arc(x, y, 5, 0, 2 * Math.PI);*/
            ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fillStyle = (isBlue = !isBlue) ? '#99c0ff' : '#f1f9ff';
        ctx.fill();
    }
    //绘制伞骨
    ctx.fillStyle='#f00';
    ctx.font="30px Arial";
    for (var j = 0; j < step; j++) {
        var rad = (360 / step) * (Math.PI / 180) * j;
        var x = x0 + Math.sin(rad) * r0;
        var y = y0 + Math.cos(rad) * r0;
        ctx.moveTo(x0,y0);
        ctx.lineTo(x,y);
        //输出项目内容
        ctx.textAlign='left';
        ctx.fillText(cfg.data[j][0],x,y);
    }
    ctx.strokeStyle='#e0e0e0';
    ctx.stroke();
    component.append(canvas);
    //绘制数据层
    var canvasData = document.createElement('canvas');
    var ctxData = canvasData.getContext('2d');
    canvasData.width = cfg.width;
    canvasData.height = cfg.height;
    component.append(canvasData);
    ctxData.fillStyle='#f00';
    var draw= function (per) {
        ctxData.clearRect(0,0,canvasData.width,canvasData.height);
        //输出数据的折线
        for(var i=0;i<step;i++){
            var rad = (360 / step) * (Math.PI / 180) * i;
            var rate=cfg.data[i][1]*per;
            var x = x0 + Math.sin(rad) * r0*rate;
            var y = y0 + Math.cos(rad) * r0*rate;
            ctxData.lineTo(x,y);
        }
        ctxData.closePath();
        ctxData.stroke();

         //输出数据的点
        ctxData.fillStyle='#f00';
        for(var i=0;i<step;i++){
            ctxData.beginPath();
            var rad = (360 / step) * (Math.PI / 180) * i;
            var rate=cfg.data[i][1]*per;
            var x = x0 + Math.sin(rad) * r0*rate;
            var y = y0 + Math.cos(rad) * r0*rate;
            ctxData.arc(x,y,5,0,2*Math.PI);
            ctxData.fill();
        }
    };
    //绘制生长动画
    component.on('onLoad', function () {
        var s=0;
        for(var i=0;i<100;i++){
            setTimeout(function () {
                s+=.01;
                draw(s);
            },i*10+500);
        }
    });
    component.on('onLeave', function () {
        var s=1;
        for(var i=0;i<10;i++){
            setTimeout(function () {
                s-=.1;
                draw(s);
            },i*10+500);
        }
    });
    return component;
};
