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


    //scroll on home page
      if ($('body.home').length > 0)
      {
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
      }
      //scroll on all other pages
      else
      {
        var targetOffset2 = $(".underline").offset().top;
              $(window).scroll(function() {
                  if($(window).scrollTop() > targetOffset2) { //scrolled past the other div?
                    $('#menu1').hide();
                    $('#menu2').show();
                  } else {
                            $('#menu1').show();
                            $('#menu2').hide();
                        }
              });
      }


    });
