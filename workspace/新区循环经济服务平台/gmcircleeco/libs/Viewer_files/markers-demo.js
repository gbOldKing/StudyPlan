/**
 * Initialize the viewer
 * 参考tree.js教程，及photo-sphere-viewer教程
 */



var scrHeight=$(window).height();
var PSV = new PhotoSphereViewer({
  // main configuration
  panorama: '1.jpg',
  container: 'photosphere',
  loading_img: '../textures/sprite1.png',
  time_anim: false,
  caption: 'Bryce Canyon National Park <b>&copy; Mark Doliner</b>',
  default_fov: 70,
  default_lat: 0.3,
  mousewheel: false,
  size: {
    height: scrHeight
  },

  // list of markers
  markers: [
    {
      // image marker that opens the panel when clicked
      id: 'image',
      longitude: 5.69810,
      latitude: -0.13770,
      image: '../textures/sprite1.png',
      width: 32,
      height: 32,
      anchor: 'bottom center',
      tooltip: 'A image marker. <b>Click me!</b>',
      content: "asfsdfdsg"
    },
    {
      // image marker that opens the panel when clicked
      id: 'image2',
      longitude: 6.32,
      latitude: -0.18770,
      image: 'tage.png',
      width: 187,
      height: 90,
      anchor: 'bottom center',
      tooltip: 'A image marker. <b>Click me!</b>', 
    },
    
    {
      id: 'text',
      longitude: 6,
      latitude: 0,
      html:'<div id="video" class="video-box"><video src="宣传视频合集3.mp4"  width="470" autoplay="autoplay" loop="loop"></video></div>',
      anchor: 'bottom right',
      style: {
        maxWidth: '100px',
        color: 'white',
        fontSize: '20px',
        fontFamily: 'Helvetica, sans-serif',
        textAlign: 'center'
      },
       content: "内容检测",
      tooltip: {
        content: 'An HTML marker',
        position: 'right'
      }
    },
    {
      id: 'text2',
      longitude: 1.3,
      latitude: 0.1,
      html:'<div id="video" class="video-box"><video src="../textures/sintel.mp4"  width="470" autoplay="autoplay" loop="loop"></video></div>',
      anchor: 'bottom right',
      style: {
        maxWidth: '100px',
        color: 'white',
        fontSize: '20px',
        fontFamily: 'Helvetica, sans-serif',
        textAlign: 'center'
      },
      tooltip: {
        content: 'An HTML marker',
        position: 'right'
      }
    },
    
    {
      id: 'text3',
      longitude: 3,
      latitude: 0.1,
      html:'<div id="video" class="video-box"><video src="../textures/pano.webm"  width="470" autoplay="autoplay" loop="loop"></video></div>',
      anchor: 'bottom right',
      style: {
        maxWidth: '100px',
        color: 'white',
        fontSize: '20px',
        fontFamily: 'Helvetica, sans-serif',
        textAlign: 'center'
      },
      tooltip: {
        content: 'An HTML marker',
        position: 'right'
      }
    },
    
    {
      // polygon marker
      id: 'polygon',
      polygon_px: [3184, 794, 3468, 741,  3327, 1307, 3065, 1221],
      svgStyle: {
        fill: 'rgba(200, 0, 50, 0.8)',
        stroke: 'rgba(200, 0, 50, 0.8)',
        'stroke-width': '2px'
      },
      tooltip: {
        content: 'A dynamic polygon marker',
        position: 'right bottom'
      }
      
    },
    {
      // circle marker
      id: 'circle',
      circle: 20,
      x: 2500,
      y: 1000,
      tooltip: 'A circle marker'
    }
  ]
});


//点击添加标记
PSV.on('click', function(e) {
  PSV.addMarker({
    id: '#' + Math.random(),
    longitude: e.longitude,
    latitude: e.latitude,
    html:e.longitude+','+e.latitude,
    width: 32,
    height: 32,
    anchor: 'bottom center',
    tooltip: 'Generated pin',
    data: {
      generated: true
    }
  });
});

/**
 * 点击删除添加的标记
 */
PSV.on('select-marker', function(marker) {
  if (marker.data && marker.data.generated) {
    PSV.removeMarker(marker);
  }
});


$(document).on("click","#psv-marker-image2",function(){	
	
	/*PSV.config.panorama="2.jpg";
	console.log(PSV.config)*/
	var act=$(this).parents(".psv-container");
	
	var PSV = new PhotoSphereViewer({
      panorama: '2.jpg',
	  container: 'photosphere',
	  loading_img: '../textures/sprite1.png',
	  time_anim: false,
	  caption: 'Bryce Canyon National Park <b>&copy; Mark Doliner</b>',
	  default_fov: 70,
	  default_lat: 0.3,
	  mousewheel: false,
	  size: {
	    height: scrHeight
	  },
	  markers: [
	  {
      // image marker that opens the panel when clicked
      id: 'image2',
      longitude: 6.32,
      latitude: -0.18770,
      image: 'tage.png',
      width: 187,
      height: 90,
      anchor: 'bottom center',
      tooltip: 'A image marker. <b>Click me!</b>', 
    },
	    {
      id: 'text',
      longitude: 6,
      latitude: 0,
      html:'<div id="video" class="video-box"><video src="宣传视频合集3.mp4"  width="570" autoplay="autoplay" loop="loop"></video></div>',
      anchor: 'bottom right',
      style: {
        maxWidth: '100px',
        color: 'white',
        fontSize: '20px',
        fontFamily: 'Helvetica, sans-serif',
        textAlign: 'center'
      },
       content: "内容检测",
      tooltip: {
        content: 'An HTML marker',
        position: 'right'
      }
    }
	    ]
	  
    });     
    
    $(this).parents(".psv-container").animate({opacity: "0"},1000,function(){act.remove();});
    $(".psv-container").animate({opacity: "1"});
 
    
})

$(document).on("click","video",function(){	
  //$(this).width(1920); 
  $("#video-show video").attr("src",$(this).attr("src"));
  $("#video-show").addClass("video-screen");
});
$(document).on("click","#video-show",function(){	
   $("#video-show").removeClass("video-screen");
})