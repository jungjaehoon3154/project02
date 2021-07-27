
$(document).ready(function () {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        speed : 500,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false
        },

        breakpoints: {
            /* when window width is >= 320px
            480: {
              
             
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            }*/
        }


    });  

    $('.start').on('click', function() {
        swiper.autoplay.start();
        $(this).addClass('hidden').siblings().removeClass('hidden');
        return false;
      });
    $('.stop').on('click', function() {
        swiper.autoplay.stop();
        $(this).addClass('hidden').siblings().removeClass('hidden');
        return false;
    });
    
    

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

   


    
});

