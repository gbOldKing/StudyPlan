/**
 * Author:oldking
 * Created by Administrator on 2017/8/27.
 * Description:饼图表组件对象
 */

var H5ComponentPie = function (name, cfg) {
    var component = new H5ComponentBase(name, cfg);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var w = cfg.width;
    var h = cfg.height;

    //  加入一个画布（网格线背景）
    canvas.width = w;
    canvas.height =h;
    component.append(canvas);
    $(canvas).css('zIndex',1);
    var x0=canvas.width/2;
    var y0=canvas.height/2;
    var r=canvas.width/2;
    //绘制背景层
    ctx.beginPath();
    ctx.fillStyle='#eee';
    ctx.arc(x0,y0,r,0,2*Math.PI);
    ctx.fill();
    //绘制数据层
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = cfg.width;
    canvas.height = cfg.height;
    component.append(canvas);
    $(canvas).css('zIndex',2);
    ctx.beginPath();
    var colors=['skyblue','greenyellow','blue','orange','gray','red'];
    var sAngel=1.5*Math.PI; //设置开始的角度为12点钟位置
    var aAngel=Math.PI*2;   //结束角度
    var eAngel=0;

    var step=cfg.data.length;
    for(var i=0;i<step;i++){
        ctx.beginPath();
        var item=cfg.data[i];
        var color =item[2] || (item[2]=colors.pop());
        eAngel=sAngel+aAngel*item[1];
        ctx.fillStyle=color;
        ctx.moveTo(x0,y0);
        ctx.arc(x0,y0,r,sAngel,eAngel);
        ctx.fill();
        sAngel=eAngel;

        //加入所有项目文本
        var text = $('<div class="text">');
        text.text( cfg.data[i][0] );
        var per =  $('<div class="per">');
        per.text( cfg.data[i][1]*100 +'%'  );
        text.append(per);
        var x = r + Math.sin( .5 * Math.PI - sAngel ) * r;
        var y = r + Math.cos( .5 * Math.PI - sAngel ) * r;

/*
         text.css('left',x/2);
         text.css('top',y/2);
*/

        if(x > w/2){
            text.css('left',x/2);
        }else{
            text.css('right',(w-x)/2);
        }
        if(y > h/2){
            text.css('top',y/2);
        }else{
            text.css('bottom',(h-y)/2+10);
        }
        if( cfg.data[i][2] ){
            text.css('color',cfg.data[i][2]);
        }
        text.css('opacity',0);
        component.append(text);
    }
    //绘制蒙版层，用于制作动画效果
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = cfg.width;
    canvas.height = cfg.height;
    component.append(canvas);
    $(canvas).css('zIndex',3);
    ctx.fillStyle='#eee';
    var draw= function (per) {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
        ctx.moveTo(x0,y0);
        if(per <=0){
            ctx.arc(x0,y0,r,0,2*Math.PI);
            component.find('.text').css('opacity',0)
        }else{
            ctx.arc(x0,y0,r,sAngel,sAngel+2*Math.PI*per,true);
        }
        ctx.fill();
        if( per >= 1){
            component.find('.text').css('opacity',1);
            ctx.clearRect(0,0,w,h);
        }
    };
    draw(0);
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
        for(var i=0;i<100;i++){
            setTimeout(function () {
                s-=.01;
                draw(s);
            },i*10);
        }
    });
    return component;
};
