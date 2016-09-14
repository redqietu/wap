! function() {
    var _lottery = $('.lottery .img');
    var _container = $('.lottery .wrapper');
    _lottery.one(EVENTTYPE.TAP, function() {
        _container.addClass('active').addClass('hover');
        _lottery.off('touchend').off('touchstart');
        setTimeout(function() {
            _container.removeClass('active').addClass('current');
            _container.addClass('over');
            setTimeout(function() {
                var flip = $('.flip').one(EVENTTYPE.TAP, function() {
                    $(this).addClass('bingo');
                    flip.off(EVENTTYPE.TAP);
                });
            }, 1000);
        }, 1000);
    });
    _lottery.on('touchstart', function() {
        _container.addClass('hover');
    }).on('touchend', function() {
        _container.removeClass('hover');
    });
}();