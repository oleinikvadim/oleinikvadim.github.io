(function ($) {
  $(document).ready(function () {
    rectDown();
    myMap();
    blogSlider();
    aos();
    waypointOppotunites ();
    scrollSmooth();
    navMenuCollapse();
    progressAnimate ();
    headerUP();
    headerZeroY();
    hamburgerCollapse();
    navActiveOnClick();
    scrollSpy();
    // downPlay();
  }); 
 
  function rectDown() {
    $(".JS-rect-down").on("click", function () {
      // TO DO scroll to the next section
      $("html, body").animate(
        {
          scrollTop: $(".section-features").offset().top,
        },
        1000
      );
    });
  }

  function myMap() {
    var coordinates = {lat: 49.988989, lng: 36.232946},
        map = new google.maps.Map(document.getElementById('JS-map'), {
            center: coordinates,
            zoom:15,
            styles: [
              {
                  "featureType": "all",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "color": "#202c3e"
                      }
                  ]
              },
              {
                  "featureType": "all",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "gamma": 0.01
                      },
                      {
                          "lightness": 20
                      },
                      {
                          "weight": "1.39"
                      },
                      {
                          "color": "#ffffff"
                      }
                  ]
              },
              {
                  "featureType": "all",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                      {
                          "weight": "0.96"
                      },
                      {
                          "saturation": "9"
                      },
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#000000"
                      }
                  ]
              },
              {
                  "featureType": "all",
                  "elementType": "labels.icon",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "landscape",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "lightness": 30
                      },
                      {
                          "saturation": "9"
                      },
                      {
                          "color": "#29446b"
                      }
                  ]
              },
              {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "saturation": 20
                      }
                  ]
              },
              {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "lightness": 20
                      },
                      {
                          "saturation": -20
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "lightness": 10
                      },
                      {
                          "saturation": -30
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#193a55"
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "geometry.stroke",
                  "stylers": [
                      {
                          "saturation": 25
                      },
                      {
                          "lightness": 25
                      },
                      {
                          "weight": "0.01"
                      }
                  ]
              },
              {
                  "featureType": "water",
                  "elementType": "all",
                  "stylers": [
                      {
                          "lightness": -20
                      }
                  ]
              }
          ]
          }
    
        ),
    
        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            animation: google.maps.Animation.BOUNCE
        });
  }
  
  function aos() {
    AOS.init({
      once: true,
      delay : 300,
    });
  }

  function progressAnimate() {
  //  $(".progress-bar").animate({
  //   width: "100%"
  // }, 2500); 

  } 
  
  function blogSlider(){
    $('.JS-blog-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            dots: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: true,
          }
        }
      ]
    });
  }
 
  function waypointOppotunites () {
    var waypoint = new Waypoint({
      element: document.getElementById('opportunetes'),
      handler: function progressAnimate() {
        $(".progress-bar").animate({
          width: "100%"
        }, 2500, function progressAnimateP(){
          $(".p-opportunes").addClass("p-opportunes--fade");
        });
      },
    })
  }
  
  function scrollSmooth() {
      // Add smooth scrolling to all links
      $(".nav-link").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          event.preventDefault();
          // Prevent default anchor click behavior
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
          });
        } // End if
      });
    
  }
  
  function headerUP() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      var scroll2 = $(window).scrollTop();
        if (prevScrollpos > currentScrollPos) {
          $(".JS-header").removeClass("header--up");
        } else if (scroll2 > 80) {
          $(".JS-header").addClass("header--up");
        }
          prevScrollpos = currentScrollPos;
      }
   }

  function navMenuCollapse(){
    $(".nav-link").on("click",function() {
      $(".JS-hamburger").removeClass("is-active");
      $(".navbar-collapse").removeClass("show");
      // $("JS-header").removeClass("header--down");
    })
  }

  function headerZeroY() {
    $(window).on("scroll",function() {    
      var scroll = $(window).scrollTop();
        if (scroll >= 100) {
          $(".JS-header").addClass("header--fill");
          $('#my-nav').on("hidden.bs.collapse", function(){
            $(".JS-header").addClass("header--fill");
          })
        } else { 
          if($(".JS-hamburger").hasClass("is-active")){
            $(".JS-header").addClass("header--fill");
            $('#my-nav').on("hidden.bs.collapse", function(){
              $(".JS-header").removeClass("header--fill");
            })
          } else {
            $(".JS-header").removeClass("header--fill");
            $('#my-nav').on("hidden.bs.collapse", function(){
            $(".JS-header").removeClass("header--fill");
            });
          }
        };
    });
  } 

  function hamburgerCollapse() {
    $('#my-nav').on("show.bs.collapse", function(){
      $(".JS-hamburger").addClass("is-active");
      $(".JS-header").addClass("header--fill");
    })
    $('#my-nav').on("hidden.bs.collapse", function(){
      $(".JS-hamburger").removeClass("is-active");
      // $(".JS-header").removeClass("header--fill");
    })
  } 
   
  function navActiveOnClick(){
    $('.navbar-nav .nav-link').click(function(){
      $('.navbar-nav .nav-link').removeClass('active');
      $(this).addClass('active');
    })
  }

  function scrollSpy(){
      $('body').scrollspy({target: ".navbar", offset: 50});
  }

})(jQuery);
