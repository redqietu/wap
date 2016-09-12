! function(Swiper, $) {
    //焦点图
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });

    //轮播图
    $('.js-section2').tab('.city-nav li');

    //表单
    //弹出
    $('.pop').popInit();
    //立即报名
    $('.js-lijibaoming').lijibaoming();
}(Swiper, $);