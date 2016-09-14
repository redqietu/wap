$.fn.popInit = function() {
    var content = $(this).on(EVENTTYPE.TAP, '.close', function() {
        $(this).closest('.pop').removeClass('active');
    }).find('.pop-content').each(function(i, x) {
        var swiper = new Swiper(x, {
            scrollbar: '.swiper-scrollbar',
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            scrollbarDraggable: true,
            freeMode: true,
            scrollbarHide: false,
        });
    });
};
$.fn.popShow = function() {
    $(this).addClass('active');
};