$(document).ready(function () {
  var swiper = new Swiper(".JS-welcome-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // fadeEffect: {
    //   crossFade: true,
    // },
    effect: "fade",

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  $(window).scroll(function () {
    var height = $(window).scrollTop();

    /*Если сделали скролл на 70px задаём новый класс для header*/
    if (height > 70) {
      $("header").addClass("scroll");
    } else {
      /*Если меньше 70px удаляем класс для header*/
      $("header").removeClass("scroll");
    }
  });

  //

  $("#my-nav").on("show.bs.collapse", function () {
    $(".header").addClass("is-open");
    $(".js-hamburger").addClass("is-active");
  });

  $("#my-nav").on("hidden.bs.collapse", function () {
    $(".header").removeClass("is-open");
  });

  $("#my-nav").on("hide.bs.collapse", function () {
    $(".js-hamburger").removeClass("is-active");
  });

  $(".JS-anchor").on("click", function () {
    // TO DO scroll to the next section
    $("html, body").animate(
      {
        scrollTop: $(".section-history").offset().top,
      },
      1000
    );
  });
  // slider 2
  $(document).ready(function () {
    $(".JS-slider").slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      dots: true,
      autoplay: true,
    });
  });
  //
  // external js: isotope.pkgd.js

  // init Isotope
  var $grid = $(".grid").isotope({
    itemSelector: ".element-item",
    layoutMode: "fitRows",
  });
  // filter functions
  var filterFns = {};
  // bind filter button click
  $(".filters-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $(".button-group").each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function () {
      $buttonGroup.find(".is-checked").removeClass("is-checked");
      $(this).addClass("is-checked");
    });
  });
  $(".JS-case-study-slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".JS-case-study-slider-nav",
    // autoplay: true,
  });
  $(".JS-case-study-slider-nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".JS-case-study-slider-for",
    arrows: false,
    dots: true,
    focusOnSelect: true,
  });

  // $(document).ready(function () {
  //   $("#my-nav").on("click", "a", function (event) {
  //     event.preventDefault();
  //     var id = $(this).attr("href"),
  //       top = $(id).offset().top;
  //     $("body,html").animate({ scrollTop: top }, 700);
  //   });
  // });
  $(".js-count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $("#scroller").fadeIn();
      } else {
        $("#scroller").fadeOut();
      }
    });
    $("#scroller").click(function () {
      $("body,html").animate({ scrollTop: 0 }, 400);
      return false;
    });
  });
  $(function () {
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse("hide");
    });
  });
});
