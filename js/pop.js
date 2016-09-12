$.fn.popInit = function() {
    $(this).on(EVENTTYPE.TAP, '.close', function() {
        $(this).closest('.pop').removeClass('active');
    });
};
$.fn.popShow = function() {
    $(this).addClass('active');
};