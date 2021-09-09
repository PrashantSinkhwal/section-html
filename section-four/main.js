jQuery(document).ready(function($) {




/*------------------------------------------------
            SLICK SLIDER
------------------------------------------------*/

$('.section-4-slider').slick({
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });




/*------------------------------------------------
                END JQUERY
------------------------------------------------*/

});