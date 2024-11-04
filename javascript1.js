(document).on("Scroll", function () {
    if
        ($(document).scrollTop() > 50) {
  $("header").addclass("shrink");
    }
    else {
  $("header").removeclass("shrink");
    }
  });