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


    //set target offset for scroll on home page
      if ($('body.home').length > 0)
      {
        var targetOffset = $("#index-about").offset().top;

      }
      //set target offset for scroll on all other pages
      else
      {
        var targetOffset = $(".underline").offset().top;

      }
      //do the scrolling
      $(window).scroll(function() {
          if($(window).scrollTop() > targetOffset) { //scrolled past the other div
            $('#menu1').hide();
            $('#menu2').show();
          } else {
                    $('#menu1').show();
                    $('#menu2').hide();
                }
      });

      //marketing page show tooltip on click
        $( ".tooltip" ).click(function() {
          $(".tooltip").css("visibility", "visible");
          $(".tooltip").css("opacity", "1");
        });

    }); //close document ready
