$(document).ready(function () {
  // nav-togler
  const menu = document.querySelector(".menu");
  const btn = menu.querySelector(".nav-tgl");
  btn.addEventListener("click", (evt) => {
    if (menu.className.indexOf("active") === -1) {
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
  });

  // const obj = {
  //   name: 1,
  // };

  // obj.name = 123;

  // const arr = [
  //   {
  //     Id: 1,
  //     Name: "Name1",
  //     price: 20,
  //   },
  //   {
  //     Id: 2,
  //     Name: "Name2",
  //     price: 40,
  //   },
  //   {
  //     Id: 3,
  //     Name: "Name3",
  //     price: 120,
  //   },
  // ];

  // arr.forEach((x) => {
  //   console.log(x);
  // });

  // const arr2 = arr.filter(x => x.Id === 1);
  // const arr3 = arr.map(x => {
  //   x.Name = 12222222222222222222222222222222;
  //   return x;
  // });

  // const totalIdCount = arr.reduce((a,b)=> a + b.Id, 0);

  // const item = arr.find(x => x.Id === 1);
  // const itemIndex = arr.findIndex(x => x.Id === 2);

  // arr.splice(itemIndex,1);

  // arr5 = [1,2,3,4,5];
  // if(arr5.includes(6)){

  // } else {

  // }

  // if(arr.length){
  //   arr.forEach(x => {
  //     x.Name = 123;
  //   });
  // }

  // button-to-top
  new fullpage("#fullpage", {
    responsiveWidth: 900,
    responsiveHeight: 600,
    verticalCentered: false,
    anchors: [
      "welcomePage",
      "gooddayPage",
      "work-outPage",
      "featuresPage",
      "mapPage",
      "loctionPage",
      "sing-upPage",
      "lastPage",
    ],

    afterLoad: function (origin, destination, direction) {
      if (+destination.index + 1 !== 4) {
        $(".JS-section-" + (+destination.index + 1))
          .find("[data-aos]")
          .addClass("aos-animate");
      }

      if (+destination.index + 1 === 4) {
        $(".JS-section-" + (+destination.index + 1))
          .find(".tab-pane.active [data-aos]")
          .addClass("aos-animate");
      }

      if (+destination.index === 2) {
        $(".animation-workout").addClass("animation-workout--animate");
      }

      if (+destination.index === 0) {
        $(".JS-scroll-to-top").removeClass("active");
      } else {
        $(".JS-scroll-to-top").addClass("active");
      }
    },
  });
  // ======================== aos
  AOS.init({
    once: true,
  });

  initMap($("#JS-map"));

  function initMap(parent) {
    if (parent.length) {
      var map;

      // CUSTOM HTML MARKER =============================
      function CustomMarker(latlng, map, args) {
        this.latlng = latlng;
        this.args = args;
        this.setMap(map);
      }

      CustomMarker.prototype = new google.maps.OverlayView();

      CustomMarker.prototype.draw = function () {
        var self = this;

        var div = this.div;

        if (!div) {
          if (typeof self.args.marker_id !== "undefined") {
            div.dataset.marker_id = self.args.marker_id;
          }

          google.maps.event.addDomListener(div, "click", function (event) {
            // marker click
            google.maps.event.trigger(self, "click");
          });

          var panes = this.getPanes();
          panes.overlayImage.appendChild(div);
        }

        var point = this.getProjection().fromLatLngToDivPixel(this.latlng);

        if (point) {
          div.style.left = point.x - 6 + "px";
          div.style.top = point.y - 12 + "px";
        }
      };

      CustomMarker.prototype.remove = function () {
        if (this.div) {
          this.div.parentNode.removeChild(this.div);
          this.div = null;
        }
      };

      CustomMarker.prototype.getPosition = function () {
        return this.latlng;
      };
      // CUSTOM HTML MARKER =============================

      var mapMarkerPosition = new google.maps.LatLng(40.679062, -74.101999);

      map = new google.maps.Map(parent[0], {
        center: mapMarkerPosition,
        zoom: 13,
        disableDefaultUI: true,
        zoomControl: false,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_CENTER,
        },

        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [
              {
                color: "#63b5e5",
              },
            ],
          },
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#f7911d",
              },
            ],
          },
          {
            featureType: "all",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#ffffff",
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              {
                gamma: 0.01,
              },
              {
                lightness: 20,
              },
              {
                color: "#212121",
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              {
                saturation: -31,
              },
              {
                lightness: -33,
              },
              {
                weight: 2,
              },
              {
                gamma: 0.8,
              },
              {
                color: "#ffffff",
              },
            ],
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                lightness: 30,
              },
              {
                saturation: 30,
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                saturation: 20,
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                lightness: 20,
              },
              {
                saturation: -20,
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                lightness: 10,
              },
              {
                saturation: -30,
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
              {
                saturation: 25,
              },
              {
                lightness: 25,
              },
            ],
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                lightness: -20,
              },
              {
                color: "#212121",
              },
            ],
          },
        ],
      });

      var marker = new google.maps.Marker({
        position: mapMarkerPosition,
        map: map,
        icon: "./img/google-marker.png",
      });

      // KEEP THE CENTER CENTERED ON WINDOW RESIZE
      var center = map.getCenter();

      google.maps.event.addDomListener(window, "resize", function () {
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
      });
    }
  }
  // ================================ clik-on-menu =================================
  $(".JS-clik").click(function () {
    $(".menu").toggleClass("active");
  });

  // features-tabs

  $('.JS-features-tabs a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    var currentId = $(this).attr("href");
    $(currentId).find("[data-aos]").addClass("aos-animate");
  });

  $('.JS-features-tabs a[data-toggle="tab"]').on("hide.bs.tab", function (e) {
    $(".JS-features-tabs").find("[data-aos]").removeClass("aos-animate");
  });
  // function myFunction(x) {
  //   x.classList.toggle("change");
  // }
  pannellum.viewer("panorama", {
    type: "equirectangular",
    panorama: "./img/360_view.jpg",
    autoLoad: true,
    showZoomCtrl: false,
    mouseZoom: false,
  });
});
