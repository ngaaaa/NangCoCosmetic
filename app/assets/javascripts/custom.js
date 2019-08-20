(function($) {
  "use strict";

  // NAVIGATION
  var responsiveNav = $("#responsive-nav"),
    catToggle = $("#responsive-nav .category-nav .category-header"),
    catList = $("#responsive-nav .category-nav .category-list"),
    menuToggle = $("#responsive-nav .menu-nav .menu-header"),
    menuList = $("#responsive-nav .menu-nav .menu-list");

  catToggle.on("click", function() {
    menuList.removeClass("open");
    catList.toggleClass("open");
  });

  menuToggle.on("click", function() {
    catList.removeClass("open");
    menuList.toggleClass("open");
  });

  $(document).click(function(event) {
    if (!$(event.target).closest(responsiveNav).length) {
      if (responsiveNav.hasClass("open")) {
        responsiveNav.removeClass("open");
        $("#navigation").removeClass("shadow");
      } else {
        if ($(event.target).closest(".nav-toggle > button").length) {
          if (!menuList.hasClass("open") && !catList.hasClass("open")) {
            menuList.addClass("open");
          }
          $("#navigation").addClass("shadow");
          responsiveNav.addClass("open");
        }
      }
    }
  });

  // HOME SLICK

  // PRODUCT ZOOM
  $("#product-main-view .product-view").zoom();

  // PRICE SLIDER
  var slider = document.getElementById("price-slider");
  if (slider) {
    noUiSlider.create(slider, {
      start: [1, 999],
      connect: true,
      tooltips: [true, true],
      format: {
        to: function(value) {
          return value.toFixed(2) + "$";
        },
        from: function(value) {
          return value;
        }
      },
      range: {
        min: 1,
        max: 999
      }
    });
  }
})(jQuery);