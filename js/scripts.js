$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");

    //hide menu2 icon on page load
    $('#menu2').hide();

});

$(document).ready(function() {
    $('#quote-carousel').carousel({
        pause: true, interval: 10000,
    });


    var targetOffset = $("#separator").offset().top;

    var $w = $(window).scroll(function(){
        if ( $w.scrollTop() > targetOffset ) {
            $('#menu1').hide();
            $('#menu2').show();
        } else {
            $('#menu1').show();
            $('#menu2').hide();
        }
    });

    $( "#scroll-btn" ).click(function() {
        alert('pressed');
        $('#menu1').hide();
        $('#menu2').show();
    });

    $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});




});<!--end document ready function-->
