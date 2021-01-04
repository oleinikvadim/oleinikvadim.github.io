(function ($) {
    $(document).ready(function () {
	hamburgerCollapse();
	scrollSpy();
	navActiveOnClick();
	scrollSmooth();
	headerZeroY();
	navMenuCollapse();
	parallaxJs();
	aos();
    }); 
   
	function navMenuCollapse(){
		$(".nav-link").on("click",function() {
		  $(".JS-hamburger").removeClass("is-active");
		  $(".navbar-collapse").removeClass("show");
		  // $("JS-header").removeClass("header--down");
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
		$(".nav-link").on('click', function(event) {
		  if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
			  scrollTop: $(hash).offset().top - $('.JS-header').height()
			}, 800, function(){
			});
		  }
		});
	  
		
	}

	function headerZeroY() {
		$(window).on("scroll",function() {    
		  var scroll = $(window).scrollTop();
			if (scroll >= 70) {
			  $(".JS-header").addClass("--down");
			}  else {$(".JS-header").removeClass("--down");}
		})   
	}

	function parallaxJs() {
		var scene = document.getElementById('scene');
		var scene2 = document.getElementById('scene2');
		var scene3 = document.getElementById('scene3');

		var parallaxInstance = new Parallax(scene);
		var parallaxInstance = new Parallax(scene2,{
			invertX: false
		})
		var parallaxInstance = new Parallax(scene3);
	}

	function aos() {
		AOS.init({
		  once: true,
		  delay : 200,
		});
	  }
})(jQuery);