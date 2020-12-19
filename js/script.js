(function($) {
    "use strict";

    /*------------- preloader js --------------*/
    function loader() {
        $(window).on('load', function() {
            $('#ctn-preloader').addClass('loaded');
            $("#loading").fadeOut(500);
            // Una vez haya terminado el preloader aparezca el scroll

            if ($('#ctn-preloader').hasClass('loaded')) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $('#preloader').delay(900).queue(function() {
                    $(this).remove();
                });
            }
        });
    }
    loader();



    // One Page Nav
    if ($(".header-area").length) {
        var top_offset = $('.header-area').height() - 10;
        $('.header-menu ul').onePageNav({
            currentClass: 'active',
            scrollOffset: top_offset,
        });
    }


    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header-sticky").removeClass("sticky-bar");
        } else {
            $("#header-sticky").addClass("sticky-bar");
        }
    });

    $(function() {
        $('a.smoth-scroll').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 5
            }, 1000);
            event.preventDefault();
        });
    });


    $('.shot-active').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        items: 40,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 3
            },
            1400: {
                items: 3
            }
        }
    });


    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });



    $('.grid').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item',
            }
        });
    });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });



    //for menu active class
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    // WOW active
    new WOW().init();


    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-long-arrow-alt-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


})(jQuery);