$(window).on('load',function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");

    //hide menu2 icon on page load
    $('#menu2').hide();

});


  $('#quote-carousel').carousel({
    pause: true, interval: 10000,
  });

  // $( "#scroll-btn" ).click(function() {
  //   $('#menu1').hide();
  //   $('#menu2').show();
  // });

  window.alert('hi');
  var targetOffset = $("#index-about").offset().top;
        $(window).scroll(function() {
            if($(window).scrollTop() > 150) { //scrolled past the other div?


               $('.big_title').hide();
              // $('#menu2').show();
            } else {
                      $('#menu1').show();
                      $('#menu2').hide();
                  }
        });
