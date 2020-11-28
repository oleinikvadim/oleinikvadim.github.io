(function ($) {
    $(document).ready(function () {
	slick();
	slickComment();
	myMap();
	jsSlideCost();
	jsVideoTeam();
	hamburgerCollapse();
    }); 
   
	function jsSlideCost(){
		$(".js-range-slider").ionRangeSlider({
			type: "double",
			min: 0,
			max: 6000,
			from: 550,
			to: 4560,
			// grid: true
			skin: "round",
			prefix: "$"
		});
	}
	
	function slick() {
		$('.JS-slider-welcome').slick({
			dots: true,
			infinite: false,
			arrows: true,
			responsive: [
				{
				breakpoint: 1400,
				settings: {
					arrows: false
					}
				}
			]
		  });
	}
	function slickComment() {
		$('.JS-slider-comment').slick({
			dots: true,
			infinite: false,
			arrows: true,
			responsive: [
				{
				breakpoint: 992,
				settings: {
					arrows: false
					}
				}
			]
		  });
	}

	function myMap() {
		var coordinates = {lat: 49.988989, lng: 36.232946},
			map = new google.maps.Map(document.getElementById('JS-map'), {
				center: coordinates,
				zoom:15,
			  }
			),
		
			marker = new google.maps.Marker({
				position: coordinates,
				map: map,
				animation: google.maps.Animation.BOUNCE
			});
	}

	function jsVideoTeam(){
		var tag = document.createElement('script');
		tag.src = "//www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		var player;
		onYouTubeIframeAPIReady = function () {
			player = new YT.Player('player', {
				height: '380',
				width: '488',
				videoId: 'AkyQgpqRyBY',  // youtube video id
				playerVars: {
					'controls': 0,
					'autoplay': 0,
					'rel': 0,
					'showinfo': 0
				},
				events: {
					'onStateChange': onPlayerStateChange
				}
			});
		}
		onPlayerStateChange = function (event) {
			if (event.data == YT.PlayerState.ENDED) {
				$('.start-video').fadeIn('normal');
			}
		}
		
		$(document).on('click', '.start-video', function () {
			$(this).fadeOut('normal');

			player.playVideo();
			$(".video-bg").fadeOut('normal');
		});
	}

	function hamburgerCollapse() {
		$('#header-navbar').on("show.bs.collapse", function(){
		  $(".JS-hamburger").addClass("is-active");
		})
		$("#header-navbar").on("hidden.bs.collapse", function(){
		  $(".JS-hamburger").removeClass("is-active");
		})
	  } 
	  
})(jQuery);