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
                margin: 10,
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
                        items: 2
                    },
                    1440: {
                        items: 3
                    }
                }
            });
        });
    });
})(jQuery, this);
