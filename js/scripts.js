$(window).on('load',function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");

    //hide menu2 icon on page load
    $('#menu2').hide();

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

$(document).ready(function() {

  $('#quote-carousel').carousel({
    pause: true, interval: 10000,
  });

  $( "#scroll-btn" ).click(function() {
    $('#menu1').hide();
    $('#menu2').show();
  });


    //set target offset for scroll on home page

      var targetOffset;
      if ($('body.home').length > 0)
      {
        targetOffset = $("#index-about").offset().top;

      }
      //set target offset for scroll on all other pages
      else
      {
        targetOffset = $(".underline").offset().top;

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


});


$(document).ready(function(){
	$('.navbar-default .navbar-toggle').click(function(){
		$(this).toggleClass('open');
    //$(this).removeClass('open');
	});
});


//marketing page show tooltip on click
  $( ".tooltip" ).on("click", function() {
    window.alert('hi');
    $(".tooltip").css("visibility", "visible");
    $(".tooltip").css("opacity", "1");
  });


    }); //close document ready
