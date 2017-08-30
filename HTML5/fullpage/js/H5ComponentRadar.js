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

    ctx.beginPath();
    var x0 = canvas.width / 2,
        r0 = canvas.width / 2,
        y0 = canvas.height / 2;
    var step=cfg.data.length
    ctx.arc(x0, y0, r0, 0, 2 * Math.PI);
    ctx.moveTo(x0,y0);
    for (var i = 0; i < step; i++) {
        var rad=(360/step)*(Math.PI/180)*i;
        var x=x0+Math.sin(rad)*x0;
        var y=y0+Math.cos(rad)*y0;
        /*ctx.arc(x, y, 5, 0, 2 * Math.PI);*/

        ctx.lineTo(x,y);
    }
    ctx.stroke();


    component.append(canvas);

    return component;
};
