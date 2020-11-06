$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    } else {
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });
  $(".goTop").click(function () {
    scroll(0, 0)
  });


  $(".navbar__toggler").click(function () {
    $(this).toggleClass("navbar__toggler-active");
    $(".navbar__menu").toggleClass("navbar__active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });

});