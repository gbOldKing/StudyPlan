$(function () {
        var swiper_h = new Swiper('.swiper-container-h', {
            loop: false,
            speed: 300,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            onSlideChangeStart: function (swiper) {
                $('.p1-container').find('li').each(function (index, item) {
                    index == swiper.activeIndex ? $(item).addClass('active') : $(item).removeClass('active');
                })
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper);
            }
        });
        $('.p1-container').find('li').click(function () {
            swiper_h.slideTo($(this).index(), 1000, true);
        });
        var $nav_Items = $('#nav').find('.nav-item');
        var $inverse = $('.navbar-inverse');
        var swiper_v = new Swiper('.swiper-container-v', {
            direction: 'vertical',
            loop: false,
            speed: 500,
            slidesPerView:'auto',
            mousewheelControl: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: function () {
                return '<span class="swiper-pagination-bullet glyphicon glyphicon-star"></span>';
            },
            onInit: function (swiper) {
                swiperAnimateCache(swiper);
                swiperAnimate(swiper);
            },
            onSlideChangeStart: function (swiper) {
                swiper.activeIndex == 0 ? $inverse.removeClass('top-nav-collapse') : $inverse.addClass('top-nav-collapse');
                $nav_Items.each(function (index, item) {
                    index == swiper.activeIndex ? $(item).addClass('active') : $(item).removeClass('active');
                })
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper);
            }
        });
        var $slidesPerView=0;
        var $windowWidth=$(window).width();
        if($windowWidth>=1600){
            $slidesPerView=4
        }else if(1200<=$windowWidth && $windowWidth<1600){
            $slidesPerView=3
        }else if(480<=$windowWidth && $windowWidth<1200){
            $slidesPerView=2
        }else{
            $slidesPerView=1
        }
        var swiper_cases=new Swiper('.swiper-container-cases',{
            slidesPerView:$slidesPerView,
            loop:true,
/*            autoplay:3000,*/
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            pagination: '.swiper-cases-pagination',
            paginationType : 'progress',
        });
        $('.next-page').on('click', function () {
            swiper_v.slideNext();
        });
        mui('body').on('tap','a',function(){
            console.log(1);
            if(typeof($(this).data('index'))=='undefined'){
                 document.location.href=this.href;
            }
            swiper_v.slideTo($(this).data('index'),1000, true);
        });

        var $sidebar=$('.mui-off-canvas-wrap')[0];
        $sidebar.addEventListener('shown',function (event) {
            $('.sidebar-switch').addClass('active');
            $('.mui-backdrop').css('display','block');
        });
        $sidebar.addEventListener('hidden',function (event) {
            $('.sidebar-switch').removeClass('active');
            $('.mui-backdrop').css('display','none');
        });

        function doStep(){
            var $alpha=$('.alpha');
            var $beta=$('.beta');
            $('button.next-step').click(function(event){
              event.preventDefault();
              $('.alpha').removeClass("in").addClass("out");
              $('.beta').removeClass("out").addClass("in");
            });
            $('button.prev-step').click(function(event){
              event.preventDefault(); 
              $('.alpha').removeClass("out").addClass("in");
              $('.beta').removeClass("in").addClass("out");
            });
          }
        doStep();
    })
    function sidebar_toggle () {
        mui('.mui-off-canvas-wrap').offCanvas().toggle();
    };