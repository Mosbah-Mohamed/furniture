$(document).ready(function () {

    //spinner

    $(window).on('load', function () {
        $('.load').fadeOut(1500)
    })


    // navbar toggler
    $('nav .navbar-toggler').on('click', function () {

        $('nav .one').toggleClass('top');
        $('nav .two').toggleClass('hidden');
        $('nav .three').toggleClass('bottom');
    })


    // scroll to sections

    $('nav li a').on('click', function () {

        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 80
        }, 1000)
    })


    //add class active to li a


    $('nav li a').on('click', function () {

        $(this).addClass('active').parent().siblings().find('a').removeClass('active')
    })

    //up button

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 1000) {
            $('.up').fadeIn(1000);
        } else {
            $('.up').fadeOut(1000);
        }

    })


    $('.up').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700)
    })





    // venobox plugin

    $('.venobox').venobox();

    // mixitup plugin

    var mixer = mixitup('.gallery');


})


