$(window).on('load',function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");

    //hide menu2 icon on page load
    $('#menu2').hide();

});

<<<<<<< HEAD

=======
$(document).ready(function() {
>>>>>>> c64262737909f3abaf8c102827dbebe145a39966
  $('#quote-carousel').carousel({
    pause: true, interval: 10000,
  });

<<<<<<< HEAD
  // $( "#scroll-btn" ).click(function() {
  //   $('#menu1').hide();
  //   $('#menu2').show();
  // });
=======
  $( "#scroll-btn" ).click(function() {
    $('#menu1').hide();
    $('#menu2').show();
  });
>>>>>>> c64262737909f3abaf8c102827dbebe145a39966

  window.alert('hi');
  var targetOffset = $("#index-about").offset().top;
        $(window).scroll(function() {
<<<<<<< HEAD
            if($(window).scrollTop() > 150) { //scrolled past the other div?


               $('.big_title').hide();
              // $('#menu2').show();
=======
            if($(window).scrollTop() > targetOffset) { //scrolled past the other div?
              $('#menu1').hide();
              $('#menu2').show();
>>>>>>> c64262737909f3abaf8c102827dbebe145a39966
            } else {
                      $('#menu1').show();
                      $('#menu2').hide();
                  }
        });
<<<<<<< HEAD
=======
    });
>>>>>>> c64262737909f3abaf8c102827dbebe145a39966
