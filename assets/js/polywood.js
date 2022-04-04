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

        // ========================================
        // Carousels
        // ========================================
        $(document).ready(function() {
            /* instantiate responsive review carousel*/
            $('#review-carousel').owlCarousel({
                loop: true,
                dots: false,
                nav: true,
                navText: ['', ''],
                responsiveClass: true,
                responsive: {
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

            /* callback function that syncs the active dot nav when the colors carousel changes */
            /* using strict, so need this above the carousel instantiation since it's not hoisted */
            let syncDots = function(el) {
                let current = el.item.index;
                let count = el.item.count;
                let pageSize = el.page.size;
                let currentDot = $('.colors-dots li').eq(current);

                if( current <= (count - pageSize) ) {
                    if( !currentDot.hasClass('active') ) {
                        $('.colors-dots li.active').removeClass('active');
                        currentDot.addClass('active');
                    }
                }
            }

            /* instantiate colors carousel with sync function callback */
            let colorsCarousel = $('#colors-carousel').owlCarousel({
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

            /* update colors carousel slide when user clicks on one of the nav dots */
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
