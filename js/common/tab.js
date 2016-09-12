$.fn.tab = function(f, t) {
    var ts = $(this).find(t);
    var fs = $(this).find(f);
    fs.each(function(index, div) {
        fs.eq(index).on(EVENTTYPE.TAP, function() {
            ts.removeClass('active');
            ts.eq(index).addClass('active');
            fs.removeClass('active');
            fs.eq(index).addClass('active');
        });
    })
};