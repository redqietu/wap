! function(Swiper, $) {
    //加载策略
    echo.init({
        offset: 100,
        throttle: 250,
        unload: false,
        callback: function(element, op) {

        }
    });
    //焦点图
    var swiper = new Swiper('#xinwen', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        lazyLoading: true
    });
    var swiper = new Swiper('#lipin', {
        slidesPerView: 2,
        spaceBetween: 0,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        lazyLoading: true,
    });
    var swiper = new Swiper('#zhongjiangmingdan', {
        slidesPerView: 2,
        spaceBetween: 0,
        autoplay: 2500,
        loop: true,
    });


    //轮播图
    $('.js-section2').tab('.city-nav li').tab('.logos li');

    //表单
    //弹出
    $('.pop').popInit();
    //立即报名
    $('.js-lijibaoming').lijibaoming();
}(Swiper, $);