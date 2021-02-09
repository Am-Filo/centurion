// import $ from '../plugins/jquery/dist/jquery.min';
// import 'slick-carousel';

import $ from "jquery";
window.$ = window.jQuery = $;
import "slick-carousel";

import intlTelInput from "intl-tel-input";

$(document).ready(() => {
  // eslint-disable-next-line no-console
  console.log(`document ready`);

  $(".mobilemenu-toggle").on("click", function () {
    $(this).next(".topmenu").stop().slideToggle();
    $(this).toggleClass("active");
    $(".windowcover").toggle();
  });

  $(".windowcover").on("click", function () {
    $(".topmenu").stop().slideUp();
    $(".windowcover").hide();
    $(".mobilemenu-toggle").removeClass("active");
  });

  //easy scroll nav
  $(".topmenu a, .foottitles a").on("click", function () {
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {}
    );
    return false;
  });

  //Start Slick
  // if ($().slick) {
  $(".slidermainproto").slick({
    infinite: false,
    slidesToShow: 5,
    speed: 1200,

    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
  // }

  if (
    ["/contacts.html", "/contacts", "contacts"].includes(
      window.location.pathname
    )
  ) {
    const input = document.querySelector("#phone");

    intlTelInput(input, {
      utilsScript: "../plugins/input-tel/utils.js",
      formatOnDisplay: true,
    });

    // intlTelInput(input, {
    //   customPlaceholder: function (
    //     selectedCountryPlaceholder,
    //     selectedCountryData
    //   ) {
    //     return "e.g. " + selectedCountryPlaceholder;
    //   },
    //   formatOnDisplay: true,
    // });
  }
});
