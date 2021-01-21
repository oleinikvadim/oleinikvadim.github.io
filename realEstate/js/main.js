(function ($) {
    $(document).ready(function () {
	slick();
	slickComment();
	jsSlideCost();
	jsVideoTeam();
	hamburgerCollapse();
	// scrollSpy();
	navActiveOnClick();
	scrollSmooth();
	headerZeroY();
	select2();
	myMap();
	gallerySlickOn();
	// progressAnimate();
	slickLightBox();
	swiperJS();
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
		// $('.section-gallery__list').slick({
		// 	centerMode: true,
		// 	centerPadding: '20px',
		// 	slidesToShow: 3
		// });
	}

	function select2() {
		$('select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
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
		let mapElement = document.getElementById('JS-map'); 

		if(mapElement){
			var coordinates = {lat: 49.988989, lng: 36.232946},
				map = new google.maps.Map(mapElement, {
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
	}

	function jsVideoTeam(){
		// var tag = document.createElement('script');
		// tag.src = "//www.youtube.com/iframe_api";
		// var firstScriptTag = document.getElementsByTagName('script')[0];
		// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		// var player;
		// onYouTubeIframeAPIReady = function () {
		// 	player = new YT.Player('player', {
		// 		height: '380',
		// 		width: '488',
		// 		videoId: 'AkyQgpqRyBY',  // youtube video id
		// 		playerVars: {
		// 			'controls': 0,
		// 			'autoplay': 0,
		// 			'rel': 0,
		// 			'showinfo': 0
		// 		},
		// 		events: {
		// 			'onStateChange': onPlayerStateChange
		// 		}
		// 	});
		// }
		// onPlayerStateChange = function (event) {
		// 	if (event.data == YT.PlayerState.ENDED) {
		// 		$('.start-video').fadeIn('normal');
		// 	}
		// }
		
		// $(document).on('click', '.start-video', function () {
		// 	$(this).fadeOut('normal');
		// 	player.playVideo();
		// 	$(".video-bg").fadeOut('normal');
		// });
		$(".video-play-button").on('click', function (){
			$('.video-plug').addClass('video-plug--off');
			$('.embed-responsive').click(function() {
				this.paused ? this.play() : this.pause();
			});
		})
	}

	function hamburgerCollapse() {
		$('#header-navbar').on("show.bs.collapse", function(){
		  $(".JS-hamburger").addClass("is-active");
		})
		$("#header-navbar").on("hidden.bs.collapse", function(){
		  $(".JS-hamburger").removeClass("is-active");
		})
	} 

	function scrollSpy(){
		$('body').scrollspy({target: ".navbar", offset: 50});
	}

	function navActiveOnClick(){
		$('.navbar-nav .nav-link').click(function(){
		  $('.navbar-nav .nav-link').removeClass('active');
		  $(this).addClass('active');
		})
	}
	  
	function scrollSmooth() {
		$(".nav-link.JS-scroll").on('click', function(event) {
		  if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
			  scrollTop: $(hash).offset().top
			}, 800, function(){
			});
		  }
		});
	  
		
	}

	function headerZeroY() {
		$(window).on("scroll",function() {    
		  var scroll = $(window).scrollTop();
			if (scroll >= 70) {
			  $(".JS-header").addClass("JS-header_down");
			}  else {$(".JS-header").removeClass("JS-header_down");}
		})   
	}

	function gallerySlickOn() {
		$(".section-gallery__item").on("click",function() {
			$(".gallery-slider").addClass("gallery-slider--opacity");
		})
	}
	  
	function progressAnimate() {
		$('.progress-bar').each(function() {
			var bar_value = $(this).attr('aria-valuenow') + '%';                
			$(this).animate({ width: bar_value }, { duration: 2000, easing: 'easeOutCirc' });
		  });
	} 

	function slickLightBox() {
		lightGallery(document.getElementById("JS-lightGallery"));
	}

	function swiperJS() {
		var galleryThumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: 10,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		  });
		  var galleryTop = new Swiper('.gallery-top', {
			spaceBetween: 10,
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
			thumbs: {
			  swiper: galleryThumbs
			}
		  });
	}
	  
})(jQuery);