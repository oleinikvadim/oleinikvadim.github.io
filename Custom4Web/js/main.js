(function ($) {
    $(document).ready(function () {
	navActiveOnClick();
	sliderTop();
	btnToTop();
	navbarDown();
	scrollSpy();
	scrollSmooth();
	hamburgerCollapse();
	navMenuCollapse();

	setTimeout(()=>{
		$('.eapps-link').hide();
	}, 1000);
}); 
   
	
	function navActiveOnClick(){
		$('.navbar-nav .nav-link').on('click',function(){
		  $('.navbar-nav .nav-link').removeClass('active');
		  $(this).addClass('active');
		})
	}

	function sliderTop(){
		$('.JS-slider-list').slick({
			slidesToShow: 1,
			dots: true
		  });
	}

	$(document).on('click','.js-videoPoster',function(e) {
		//отменяем стандартное действие button
		e.preventDefault();
		var poster = $(this);
		// ищем родителя ближайшего по классу
		var wrapper = poster.closest('.js-videoWrapper');
		videoPlay(wrapper);
	  });
	  
	  //вопроизводим видео, при этом скрывая постер
	  function videoPlay(wrapper) {
		var iframe = wrapper.find('.js-videoIframe');
		// Берем ссылку видео из data
		var src = iframe.data('src');
		// скрываем постер
		wrapper.addClass('videoWrapperActive');
		// подставляем в src параметр из data
		iframe.attr('src',src);
	}
	
	function btnToTop (){
		$("#btnToTop").on("click",function() {
			$("html, body").animate({scrollTop: 0}, 1200);
		 });
	}

	function navbarDown() {
		$(window).on("scroll",function() {    
		  var scroll = $(window).scrollTop();
			if (scroll > 210) {
			  $(".navbar-wrapper").addClass("navbar-wrapper_down");
			}  else {$(".navbar-wrapper").removeClass("navbar-wrapper_down");
			}
		})   
	}

	function scrollSpy(){
		$('body').scrollspy({target: ".navbar", offset: 50});
	}

	function scrollSmooth() {
		$(".nav-link").on('click', function(event) {
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

	function hamburgerCollapse() {
		$('#header-navbar').on("show.bs.collapse", function(){
		  $(".JS-hamburger").addClass("is-active");
		})
		$("#header-navbar").on("hidden.bs.collapse", function(){
		  $(".JS-hamburger").removeClass("is-active");
		})
	} 

	function navMenuCollapse(){
		$(".nav-link").on("click",function() {
		  $(".JS-hamburger").removeClass("is-active");
		  $(".navbar-collapse").removeClass("show");
		  // $("JS-header").removeClass("header--down");
		})
	  }
	
	  
})(jQuery);