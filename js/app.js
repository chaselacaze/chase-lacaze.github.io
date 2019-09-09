$(document).ready(function (){
    $('.phone-nav').click(function(){
        // do stuff
        console.log('here');
        $('.phone-nav').toggleClass('expanded');
    });
});
$(document).ready(function(){
    $('.email').click(function(){
       $("#myemail").fadeIn();
       setTimeout(fade_out, 5000);
       function fade_out() {
            $("#myemail").fadeOut();
       }
    });
});