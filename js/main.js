!function(e){
"use strict";
function s(){var s=e(window).height();
e(".vh100").css({height:s+"px"}),
e(".step").css({"min-height":s+"px"}),
e(".steps-init .steps").css({"margin-top":"-"+s+"px"})}
var i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent||navigator.vendor||window.opera);e('a[href^="#"]').on("click",function(s){s.preventDefault(),e(window).stop(!0).scrollTo(this.hash,{duration:600,interrupt:!0,axis:"y",easing:"easeInOutExpo"})}),
e(window).on("resize",function(){s()}),i?e(".steps-block .step").each(function(s){e(this).css("background-image","url("+e(this).data("bg")+")")}):(e(".steps-block").prepend('<div class="steps-bg vh100"><div class="steps-bgcontainer"></div></div>'),
e(".steps-block .step").each(function(s){var i=e(this).data("bg"); console.log(i); e(".steps-bgcontainer").append('<div class="step-bg vh100" style="background-image:url('+i+')"><div class="overlay"></div></div>')}),e(".step").waypoint(function(s){if("up"===s){var i=e(this.element).index();e(".step-bg").eq(i).removeClass("active")}else{var i=e(this.element).index();
e(".step-bg").eq(i).addClass("active")}},{offset:"50%"}),
e(".steps-bg").Stickyfill(),
e(".steps-block").addClass("steps-init")),
e(window).load(function(){s(),e(".loading-modal").delay(400).fadeOut(400,function(){e("body").removeClass("loading")})})}(jQuery);
