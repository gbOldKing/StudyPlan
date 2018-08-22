/*
	AUTHOR: Osvaldas Valutis, www.osvaldas.info
*/



(function( $, window, document, undefined )
{
	var isTouch		  = 'ontouchstart' in window,
		eStart		  = isTouch ? 'touchstart'	: 'mousedown',
		eMove		  = isTouch ? 'touchmove'	: 'mousemove',
		eEnd		  = isTouch ? 'touchend'	: 'mouseup',
		eCancel		  = isTouch ? 'touchcancel'	: 'mouseup',
		
		canPlayType	  = function( file )
		{
			var audioElement = document.createElement( 'audio' );
			return !!( audioElement.canPlayType && audioElement.canPlayType( 'audio/' + file.split( '.' ).pop().toLowerCase() + ';' ).replace( /no/, '' ) );
		};

	$.fn.audioPlayer = function( params )
	{
		var params		= $.extend( { classPrefix: 'audioplayer', strPlay: 'Play', strPause: 'Pause'}, params ),
			cssClass	= {},
			cssClassSub =
			{
				playPause:	 	'playpause',
				playing:		'playing',

			};

		for( var subName in cssClassSub )
			cssClass[ subName ] = params.classPrefix + '-' + cssClassSub[ subName ];

		this.each( function()
		{
			if( $( this ).prop( 'tagName' ).toLowerCase() != 'audio' )
				return false;

			var $this	   = $( this ),
				audioFile  = $this.attr( 'src' ),
				//isAutoPlay = $this.get( 0 ).getAttribute( 'autoplay' )
				isAutoPlay=params.autoplay||true,				//改为参数控制
				//, isAutoPlay = isAutoPlay === '' || isAutoPlay === 'autoplay' ? true : false ,
				isLoop	   = $this.get( 0 ).getAttribute( 'loop' ),		isLoop	   = isLoop		=== '' || isLoop	 === 'loop'		? true : false ,
				isSupport  = true;

			if( typeof audioFile === 'undefined' )
			{
				$this.find( 'source' ).each( function()
				{
					audioFile = $( this ).attr( 'src' );
					if( typeof audioFile !== 'undefined' && canPlayType( audioFile ) )
					{
						isSupport = true;
						return false;
					}
				});
			}
			else if( canPlayType( audioFile ) ) isSupport = true;

			var thePlayer = $( '<div class="' + params.classPrefix + '">' + ( isSupport ? $( '<div>' ).append( $this.eq( 0 ).clone() ).html() : '<embed src="' + audioFile + '" width="0" height="0" autostart="auto' + isAutoPlay.toString() +'" loop="' + isLoop.toString() + '" />' ) + '<div class="' + cssClass.playPause + '" title="' + params.strPlay + '"><a href="#">' + params.strPlay + '</a></div></div>' ),
				theAudio  = isSupport ? thePlayer.find( 'audio' ) : thePlayer.find( 'embed' ), 
				theAudio = theAudio.get( 0 );

			if( isSupport )
			{
				thePlayer.find( 'audio' ).css( { 'width': 0, 'height': 0,'display':'none','visibility': 'hidden' } );
			}

			if( isAutoPlay ) {
				thePlayer.addClass( cssClass.playing );
				theAudio.play();						//当参数为true时,代码控制自动播放
			}
			
			thePlayer.find( '.' + cssClass.playPause ).on( 'click', function()
			{
				if( thePlayer.hasClass( cssClass.playing ) )
				{
					$( this ).attr( 'title', params.strPlay ).find( 'a' ).html( params.strPlay );
					thePlayer.removeClass( cssClass.playing );
					isSupport ? theAudio.pause() : theAudio.Play();
					
					//theAudio.pause();
				}
				else
				{
					$( this ).attr( 'title', params.strPause ).find( 'a' ).html( params.strPause );
					thePlayer.addClass( cssClass.playing );
					isSupport ? theAudio.play() : theAudio.Stop();
					//theAudio.play();
				}
				return false;
			});

			$this.replaceWith( thePlayer );
		});
		return this;
	};
})( jQuery, window, document );