
$('.openMenu').click(function(){
    $('.Menu').removeClass('d-flex justify-content-center');
    $('.MenuUp').addClass('active');
    $('.BurgerMenu').addClass('activeBurger');
    $(".active").slideDown(700);
    $(".openMenu").css("visibility", "hidden");
    $(".closeMenu").slideDown(700);
    
});
$('.closeMenu').click(function(){
    
    $('.Menu').removeClass('d-flex justify-content-center');
    $(".active").slideUp(700);
    $(".closeMenu").slideUp(700);
    setTimeout(
        function() 
        {
            $(".openMenu").css("visibility", "visible");
            $('.MenuUp').removeClass('active');
            $('.BurgerMenu').removeClass('activeBurger');
            $('.Menu').addClass('d-flex justify-content-center');
        }, 700);
});
$(window).on('resize', function(){
    if($(window).width() > 991) {
        $('.MenuUp').css("display", "block");
    }
    if($(window).width() <= 991) {
        $('.MenuUp').css("display", "none");
    }
});
