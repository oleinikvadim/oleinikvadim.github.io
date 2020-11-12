(function ($) {

    $(document).ready(function () {
      jsSliderClients();
      hamburgerCollapse();
      headerZeroY();
      navActiveOnClick();
      scrollSmooth();
      navMenuCollapse();
      autoPlayYouTubeModal();
      scrollSpy();
    }); 
   
    function jsSliderClients(){
        $('.JS-slider-clients').slick({
            fade: true,
            arrows: true,
            nextArrow: document.querySelector('#next_btn'),
            prevArrow: document.querySelector('#prev_btn'),
          });
    } 
    
    function hamburgerCollapse() {
      $('#my-nav').on("show.bs.collapse", function(){
        $(".JS-hamburger").addClass("is-active");
      })
      $('#my-nav').on("hidden.bs.collapse", function(){
        $(".JS-hamburger").removeClass("is-active");
      })
    } 

    function headerZeroY() {
      $(window).on("scroll",function() {    
        var scroll = $(window).scrollTop();
          if (scroll >= 100) {
            $(".JS-header").addClass("JS-header_down");
          }  else {$(".JS-header").removeClass("JS-header_down");}
      })   
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

    function navMenuCollapse(){
      $(".nav-link").on("click",function() {
        $(".JS-hamburger").removeClass("is-active");
        $(".navbar-collapse").removeClass("show");
      })
    }
    
    function autoPlayYouTubeModal() {
      var trigger = $("body").find('[data-toggle="modal"]');
      trigger.click(function () {
          var theModal = $(this).data("target"),
              videoSRC = $(this).attr("data-theVideo"),
              videoSRCauto = videoSRC + "?autoplay=1";
          $(theModal + ' iframe').attr('src', videoSRCauto);
          $(theModal + ' button.close').click(function () {
              $(theModal + ' iframe').attr('src', videoSRC);
          });
      });
    }

    function scrollSpy(){
      $('body').scrollspy({target: ".navbar", offset: 50});
    }

  })(jQuery);