/**
 * Author:oldking
 * Created by Administrator on 2017/8/27.
 * Description:散点图表组件对象
 */

var H5ComponentBar = function (name,cfg) {
    var component=new H5ComponentBase(name,cfg);
    $.each(cfg.data, function (index, item) {
        var line=$('<div class="line">');
        var name=$('<div class="name">');
        var rate=$('<div class="rate">');
        var per=$('<div class="per">');
        var width=item[1]*100+'%';
        var bgStyle='';
        if(item[2]){
            bgStyle='style="background-color:'+item[2]+'"';
        }
        rate.css('width',width).html('<div class="bg" '+bgStyle+'></div>');
        name.text(item[0]);
        per.text(width);
        line.append(name).append(rate).append(per);
        component.append(line)
    });

    return component;
};
