$(window).on('load',function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");

    //hide menu2 icon on page load
    $('#menu2').hide();

});

$(document).ready(function() {
  $('#quote-carousel').carousel({
    pause: true, interval: 10000,
  });

  $( "#scroll-btn" ).click(function() {
    $('#menu1').hide();
    $('#menu2').show();
  });

  window.alert('hi');
  var targetOffset = $("#index-about").offset().top;
        $(window).scroll(function() {
            if($(window).scrollTop() > targetOffset) { //scrolled past the other div?
              $('#menu1').hide();
              $('#menu2').show();
            } else {
                      $('#menu1').show();
                      $('#menu2').hide();
                  }
        });

        $(window).scroll( function(){

  //get scroll position
  var topWindow = $(window).scrollTop();
  //multipl by 1.5 so the arrow will become transparent half-way up the page
  var topWindow = topWindow ;

  //get height of window
  var windowHeight = $(window).height();

  //set position as percentage of how far the user has scrolled
  var position = topWindow / windowHeight;
  //invert the percentage
  position = 1 - position;

  //define arrow opacity as based on how far up the page the user has scrolled
  //no scrolling = 1, half-way up the page = 0
  $('.arrow-wrap').css('opacity', position);

});

        $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    });
