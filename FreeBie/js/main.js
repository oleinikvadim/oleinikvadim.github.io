(function ($) {
    $(document).ready(function () {
      jsSliderClients();
      hamburgerCollapse();
      parallaxWelcome();
      // svgAsk();
    }); 
   
    function jsSliderClients(){
        $('.JS-slider-clients').slick({
            // fade: true,
            arrows: true,
            nextArrow: document.querySelector('#next_btn'),
            prevArrow: document.querySelector('#prev_btn'),
          });
    } function hamburgerCollapse() {
      $('#my-nav').on("show.bs.collapse", function(){
        $(".JS-hamburger").addClass("is-active");
        $(".JS-header").addClass("header--fill");
      })
      $('#my-nav').on("hidden.bs.collapse", function(){
        $(".JS-hamburger").removeClass("is-active");
        // $(".JS-header").removeClass("header--fill");
      })
    } 
    function parallaxWelcome(){
      // var scene = document.getElementById('scene');
      // var parallaxInstance = new Parallax(scene);
    }
    // function svgAsk(){
    //   // $(".p-header").on("click",function(){
    //   //   if((".ask-header").hasClass("show")){
         
    //   //   } else {
    //   //     $(".ask-svg").removeClass("ask-svg_on")
    //   //   }
    //   // })
    //   $('#accordionExample').on('show.bs.collapse', function () {
    //     //  if(("accordionExample").hasClass("show")){ 
    //        $(".ask-svg").addClass("ask-svg_on");
    //       } else($(".ask-svg").removeClass("ask-svg_on"))
    //   })
    // }
   
        
  })(jQuery);