/**
 * Created by Administrator on 2017/7/10.
 */
$(function () {
    /*获取屏幕宽度*/
    function resize(){
        var windowWidth=$(window).width();
        var isSmallScreen=windowWidth<768;
        $('#slides').find('> .carousel-inner > .item').each(function(i,item){
            var $item=$(item);/*因为拿到的是DOM对象需要转换*/
            var imgsrc=isSmallScreen?$item.data('image-xs'):$item.data('image-lg');
            $item.css('backgroundImage','url("'+imgsrc+'")');
            if (isSmallScreen) {
                $item.html('<img src="'+imgsrc+'" alt="" />');
            } else {
                $item.empty();
            }
        })
    }
    resize();
    $(window).on('resize',resize);
    $('[data-toggle="tooltip"]').tooltip();
    var $ulContainers=$('.nav-tabs');
    var width=30;
    $ulContainers.children().each(function (index, element) {
        width+=element.clientWidth;
    });
    if(width>$(window).width()){
        $ulContainers.css('width',width).parent().css('overflow-x','scroll')
        /*$('.ul-wapper').css('overflow-x','scroll')*/
    }

    $('#news').find('.nav-pills a').on('click', function () {
        var $this=$(this);
        var title=$this.data('title');
        $('.news-title').text(title);
    });


    var $carousels=$('.carousel');
    var startX=0;
    var endX=0;
    var offset=50;
    $carousels.on('touchstart', function (e) {
        startX=e.originalEvent.touches[0].clientX;
        console.log(startX);
    });
    $carousels.on('touchmove', function (e) {
        /*通过变量重复赋值*/
        endX=e.originalEvent.touches[0].clientX;
    });
    $carousels.on('touchend', function (e) {
        /*结束触摸一瞬间记录最后手指所在X坐标*/
        console.log(endX);
        var distance=Math.abs(startX-endX);
        console.log(distance);
        if(distance>offset){
            console.log('work');
            $(this).carousel(startX>endX?'next':'prev');
        }
    })

});
