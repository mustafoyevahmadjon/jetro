$(function(){
    $('.slider').slick({
        arrows: true,
        asNavFor: '.thumbs',
        autoplay: true,
         autoplaySpeed: 1000,
         prevArrow:  '<button class="slick-arrow slick-prev"><img src="images/slider/arrow_left.svg" alt=""></button>',
         nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/arrow_right.svg" alt=""></button>',
    });

    $('.thumbs').slick({
        arrows:false,
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider',
        focusOnSelect: true
    });
});
