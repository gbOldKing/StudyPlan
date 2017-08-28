/**
 * Author:oldking
 * Created by Administrator on 2017/8/27.
 * Description:散点图表组件对象
 */

var H5ComponentPoint = function (name,cfg) {
    var component=new H5ComponentBase(name,cfg);
    var base=cfg.data[0][1];
    console.log(base);
    $.each(cfg.data, function (index, item) {
        var point=$('<div class="point point_'+index+'">')
        point.text(item[0]+'_'+item[1]);
        var per=(item[1]/base*100)+'%';
        console.log(per);
        point.width(per).height(per);
        if(item[2]){
            point.css('backgroundColor',item[2])
        }
        if(item[3] !==undefined &&item[4]){
            point.css('left',item[3]).css('top',item[4]);
        }
        component.append(point);
    })
    return component;
};
