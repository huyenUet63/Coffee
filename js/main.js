/*--search bar--*/
$(document).on('click', '.search', function(){
    $('.search-bar').addClass('search-bar-active')
});
$(document).on('click', '.search-cancel', function(){
    $('.search-bar').removeClass('search-bar-active')
});

/*--login-signup form--*/
$(document).on('click', '.user, .already-member', function(){
    $('.form').addClass('login-active').removeClass('signup-active')
});
$(document).on('click', '.sign-up-btn', function(){
    $('.form').addClass('signup-active').removeClass('login-active')
});

$(document).on('click', '.form-cancel', function(){
    $('.form').removeClass('login-active').removeClass('signup-active')
});

/*--full slider--*/
$(document).ready(function(){
    $('#adaptive').lightSlider({
        adaptiveHeight: true,
        auto: true,
        item: 1,
        slideMargin: 0,
        loop: true
    });
});

/*--category slider--*/
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        // loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cs-hidden');
        } 
    });  
});

/*--fix navigation when scroll--*/
$(window).scroll(function(){
    if ($(document).scrollTop() > 50){
        $('.navigation').addClass('fix-nav');
    }
    else {
        $('.navigation').removeClass('fix-nav');
    }
});

/*--make menu responsive--*/
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })
});


