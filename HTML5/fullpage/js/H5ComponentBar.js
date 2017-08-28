/**
 * Author:oldking
 * Created by Administrator on 2017/8/27.
 * Description:散点图表组件对象
 */

var H5ComponentBar = function (name,cfg) {
    var component=new H5ComponentBase(name,cfg);
    $.each(cfg.data, function (index, item) {
        console.log(item);
    })
    return component;
};
