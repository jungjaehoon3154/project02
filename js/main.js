
$(document).ready(function () {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
        }
    });  

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });


    
});

