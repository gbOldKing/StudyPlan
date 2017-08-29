/**
 * Author:oldking
 * Created by Administrator on 2017/8/27.
 * Description:雷达图表组件对象
 */

var H5ComponentRadar = function (name, cfg) {
    var component = new H5ComponentBase(name, cfg);
    var w = cfg.width;
    var h = cfg.height;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;

    component.append(canvas);

    return component;
};
