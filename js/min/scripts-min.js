<<<<<<< HEAD
$(window).on("load",function(){$(".se-pre-con").fadeOut("slow"),$("#menu2").hide()}),$("#quote-carousel").carousel({pause:!0,interval:1e4}),window.alert("hi");var targetOffset=$("#index-about").offset().top;$(window).scroll(function(){$(window).scrollTop()>150?$(".big_title").hide():($("#menu1").show(),$("#menu2").hide())});
=======
$(window).on("load",function(){$(".se-pre-con").fadeOut("slow"),$("#menu2").hide()}),$(document).ready(function(){$("#quote-carousel").carousel({pause:!0,interval:1e4}),$("#scroll-btn").click(function(){$("#menu1").hide(),$("#menu2").show()}),window.alert("hi");var o=$("#index-about").offset().top;$(window).scroll(function(){$(window).scrollTop()>o?($("#menu1").hide(),$("#menu2").show()):($("#menu1").show(),$("#menu2").hide())})});
>>>>>>> c64262737909f3abaf8c102827dbebe145a39966
