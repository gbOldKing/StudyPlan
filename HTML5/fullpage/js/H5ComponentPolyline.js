/**
 * Author:oldking
 * Created by Administrator on 2017/8/27.
 * Description:折线图表组件对象
 */

var H5ComponentPolyline = function (name, cfg) {
    var component = new H5ComponentBase(name, cfg);
    var w = cfg.width;
    var h = cfg.height;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;
    var step = 10;
    //绘制网格线（背景层）

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#666';
    for (var i = 0; i < step + 1; i++) {
        ctx.moveTo(0, i * 40);
        ctx.lineTo(w, i * 40);
    }
    var x0 = w / (cfg.data.length + 1);
    for (var j = 0; j <= cfg.data.length + 1; j++) {
        ctx.moveTo(x0 * j, 0);
        ctx.lineTo(x0 * j, h);
    }
    ctx.stroke();
    component.append(canvas);

    //绘制折线数据（数据层）
    //绘制各数据点
    var canvasData = document.createElement('canvas');
    var ctxData = canvasData.getContext('2d');
    canvasData.width = w;
    canvasData.height = h;
    component.append(canvasData);
    function drawData(per) {
        ctxData.beginPath();
        ctxData.clearRect(0, 0, w, h);
        var x = 0;
        var y = 0;
        for (var i = 0; i < cfg.data.length; i++) {
            var item = cfg.data[i];
            x = w / (cfg.data.length + 1) * (i + 1);
            y = h - (item[1] * h * per);
            ctxData.moveTo(x, y);
            ctxData.arc(x, y, 5, 0, 2 * Math.PI);
        }
        ctxData.fillStyle = '#f00';
        ctxData.fill();
        //绘制连接线
        ctxData.beginPath();
        var beginX = w / (cfg.data.length + 1);
        var beginY = h - ((cfg.data[0][1]) * h * per);
        ctx.moveTo(beginX, beginY);
        for (var j = 0; j < cfg.data.length; j++) {
            var data = cfg.data[j];
            x = w / (cfg.data.length + 1) * (j + 1);
            y = h - (data[1] * h * per);
            ctxData.fillStyle = data[2] ? data[2] : '#333';
            ctxData.fillText((data[1] * 100 >> 0) + '%', x - 10, y - 15);
            ctxData.lineTo(x, y);
        }
        ctxData.lineWidth = 3;
        ctxData.strokeStyle = '#ff8878';
        ctxData.stroke();
        //绘制阴影
        ctxData.lineTo(x, h);
        ctxData.lineTo(beginX, h);
        ctxData.fillStyle = 'rgba(255,135,120,.3)';
        ctxData.fill();
    }

    var s = 0;
    component.on('onLoad', function () {
        for (var i = 0; i < 100; i++) {
            setTimeout(function () {
                s += .01;
                drawData(s);
            }, i * 10+500);
        }
    });
    component.on('onLeave', function () {
        for (var i = 0; i < 100; i++) {
            setTimeout(function () {
                s -= .01;
                drawData(s);
            }, i * 10);
        }

    });
    return component;
};
