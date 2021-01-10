let firstSwiper = new Swiper('.image-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    simulateTouch: true,
    touchRatio: 1,
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
});

let secondSwiper = new Swiper('.text-slider', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    simulateTouch: true,
    touchRatio: 0,
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 800,
    direction: 'vertical',
});


