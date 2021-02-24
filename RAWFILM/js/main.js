(function ($) {
    $(document).ready(function () {
		videoCollection();
		videoCollectionGallery();
		videoCollectionGallery2();
		swiperFootageGallery();
		reviewSlider();
		modalVideo();
		headerZeroY();
		hamburgerCollapse();
		navBodyNotScroll();
	}); 
		function videoCollection(){
			var swiper = new Swiper('.video-collection__main', {
				spaceBetween: 30,
				pagination: {
				el: '.swiper-pagination',
				clickable: true,
				},
				
			});
		}

		function videoCollectionGallery(){
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
					nextEl: '.video-collection__next',
					prevEl: '.video-collection__prev',
				},
				thumbs: {
				swiper: galleryThumbs
				}
			});
		}
		
		function videoCollectionGallery2(){
			var galleryThumbs2 = new Swiper('.gallery-thumbs2', {
				spaceBetween: 10,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var galleryTop = new Swiper('.gallery-top2', {
				spaceBetween: 10,
				navigation: {
					nextEl: '.video-collection__next2',
					prevEl: '.video-collection__prev2',
				},
				thumbs: {
				swiper: galleryThumbs2
				}
			});
		}

		function swiperFootageGallery(){
			var swiper = new Swiper('.footage-gallery-container', {
				slidesPerView: 'auto',
				spaceBetween: 30,
				loop: true,
				navigation: {
					nextEl: '.slider-nav_next__footage',
					prevEl: '.slider-nav_prev__footage',
				},
				pagination: {
					el: '.swiper-pagination-1',
					clickable: true,
				},
			});
		}

		function reviewSlider() {
			var swiper = new Swiper('.review__slider', {
				slidesPerView: 1,
				centeredSlides: true,
				loop: true,
				pagination: true,
				pagination: {
					el: '.swiper-pagination3',
					clickable: true,
				},
				navigation: {
					nextEl: '.slider-nav_next__review',
					prevEl: '.slider-nav_prev__review',
				},
				breakpoints: {
					1380: {
					slidesPerView: 3,
					spaceBetween: 20,
					},
				
				}
			});
			
		}

		function modalVideo(){
			var url = $("#cartoonVideo").attr('src');

			$("#myModal").on('hide.bs.modal', function(){
				$("#cartoonVideo").attr('src', '');
			});

			$("#myModal").on('show.bs.modal', function(){
				$("#cartoonVideo").attr('src', url);
			});
		
		}

		function headerZeroY() {
			$(window).on("scroll",function() {    
			var scroll = $(window).scrollTop();
				if (scroll >= 50) {
				$(".JS-header").addClass("JS-header_down");
				}  else {$(".JS-header").removeClass("JS-header_down");}
			})   
		}

		function hamburgerCollapse() {
			$('#my-nav').on("show.bs.collapse", function(){
			$(".JS-hamburger").addClass("is-active");
			})
			$("#my-nav").on("hide.bs.collapse", function(){
			$(".JS-hamburger").removeClass("is-active");
			})
		} 

		function navBodyNotScroll() {
			$('.navbar-toggler').on('click', function() {
				if($('.navbar-collapse').hasClass('show')) {
					$('body').css('overflow','visible');
					$('.overlay').removeClass('overlay_active');
				} else {
					$('body').css('overflow','hidden');
					$('.overlay').addClass('overlay_active');
				}
			});
		}


})(jQuery);