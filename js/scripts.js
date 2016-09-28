$(window).on('load',function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");

    //hide menu2 icon on page load
    $('#menu2').hide();

});
//

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

    // $( "#scroll-btn" ).click(function() {
    //     alert('pressed');
    //     $('#menu1').hide();
    //     $('#menu2').show();
    // });

    $("#scroll-btn").click(function(event){
            //prevent the default action for the click event
            event.preventDefault();

            //get the full url - like mysitecom/index.htm#home
            var full_url = this.href;

            //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
            var parts = full_url.split("#");
            var trgt = parts[1];

            //get the top offset of the target anchor
            var target_offset = $("#"+trgt).offset();
            var target_top = target_offset.top;

            //goto that anchor by setting the body scroll top to anchor top
            $('html, body').animate({scrollTop:target_top}, 1500, 'easeInSine');
        });
