/**
 * Author:oldking
 * Created by Administrator on 2017/8/27.
 * Description:基本图文组件对象
 */

var H5ComponentBase = function (name,cfg) {
    //noinspection JSDuplicatedDeclaration
    var cfg = cfg || {};
    var id=('H5_c_'+Math.random()).replace('.','_');
    var cls= 'h5_component_'+cfg.type;
    var component=$('<div class="h5_component '+cls+' h5_component_name_'+name+'" id="'+id+'">');
    cfg.text && component.text(cfg.text);
    cfg.width && component.width(cfg.width/2);
    cfg.height && component.height(cfg.height/2);
    cfg.css && component.css(cfg.css);
    cfg.bg && component.css('backgroundImage','url('+cfg.bg+')');
    if(cfg.center){
        component.css({
            position: 'absolute',
            marginLeft:(cfg.width/4*-1)+'px',
            left:'50%',
        })
    }
    if(typeof cfg.onclick=='function'){
        component.on('click',cfg.onclick);
    }
    component.on('onLoad', function () {
        setTimeout(function () {
            component.addClass(cls+'_load').removeClass(cls+'_leave');
            cfg.animateIn && component.stop(true).animate(cfg.animateIn);
        },cfg.delay || 0);
        return false; //防止事件循环传播 --造成死循环

    });
    component.on('onLeave', function () {

        component.addClass(cls+'_leave').removeClass(cls+'_load');
        cfg.animateOut && component.stop(true).animate(cfg.animateOut);
        return false;
    });
    return component;
};


/*function H5ComponentBase(cfg){
    this.component=$('<div class="h5_component">');
    this.text=cfg.text?cfg.text:'';
}*/
