$(function(){

    $(window).scroll(function(){
        if( $(window).scrollTop() > 50 ) {
            $('header').addClass('scrolled');
            $('header .logo .icon-logo').addClass('black');
            $('header .icon-social-link').addClass('black');
        } else {
            $('header').removeClass('scrolled');
            $('header .logo .icon-logo').removeClass('black');
            $('header .icon-social-link').removeClass('black');
        }
    });
});