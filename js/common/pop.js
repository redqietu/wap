$.fn.popInit = function() {
    window.GLOBALPOP = window.GLOBALPOP || this;
    var args = arguments;
    this.each(function(i, x) {
        var content = $(x).on(EVENTTYPE.TAP, '.close', function() {
            $(x).closest('.pop').removeClass('active');
        });
        content.find('.pop-content').each(function(i, x) {
            console.log(x)
                // var swiper = new Swiper(x, {
                //     scrollbar: '.swiper-scrollbar',
                //     direction: 'vertical',
                //     slidesPerView: 'auto',
                //     mousewheelControl: true,
                //     scrollbarDraggable: true,
                //     freeMode: true,
                //     scrollbarHide: true,
                // });
        });
        _.each(args, function(fn, i) {
            fn.call(x);
        });
    })
};
$.fn.popShow = function() {
    window.GLOBALPOP.removeClass('active');
    $(this).addClass('active');
};