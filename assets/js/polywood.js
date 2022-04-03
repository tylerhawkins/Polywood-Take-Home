(function ($, root, undefined) {
    $(function () {
        'use strict';

        // ========================================
        // Accordion
        // ========================================
        $('.accordion > li > h3').click(function() {
            let target = $(this).parent();

            if( !$(this).parent().hasClass('active') ) {
                $('.accordion > li').removeClass('active');
                setTimeout(function() {
                    target.addClass('active');
                }, 100);
            } else {
                target.removeClass('active');
            }
        });

        $(document).ready(function(){
            $('.review-carousel').owlCarousel({
                loop: true,
                dots: false,
                nav: true,
                navText: ['',''],
                responsiveClass: true,
                responsive:{
                    0: {
                        items: 1
                    },
                    956: {
                        items: 2,
                        margin: 10
                    },
                    1440: {
                        items: 3,
                        margin: 10
                    }
                }
            });

            let syncDots = function(el) {
                console.log(el);
                let current = el.item.index;
                let currentDot = $('.colors-dots li').eq(current);

                if( !currentDot.hasClass('active') ) {
                    $('.colors-dots li.active').removeClass('active');
                    currentDot.addClass('active');
                }
            }

            let colorsCarousel = $('.colors-carousel').owlCarousel({
                dots: false,
                nav: true,
                navText: ['',''],
                responsiveClass: true,
                responsive:{
                    0: {
                        items: 1
                    },
                    956: {
                        items: 2,
                        margin: 10
                    },
                    1440: {
                        items: 3,
                        margin: 10
                    }
                }
            }).on("changed.owl.carousel", syncDots);

            $('.colors-dots li img').click(function() {
                if( !$(this).parent().hasClass('active') ) {
                    $('.colors-dots li.active').removeClass('active');
                    $(this).parent().addClass('active');
                    colorsCarousel.trigger('to.owl.carousel', [$(this).parent().index(), 200]);
                }
            });
        });
    });
})(jQuery, this);
