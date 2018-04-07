(function ($) {
    $('.project').hide();
    $(window).on("load", function () {
        $(".container").mCustomScrollbar({
            theme: "minimal-dark"
        });
    });
    $('.tabs_head').on('click','a',function(){
        var _href = $(this).data('href');
        var $parent_dom = $(this).parent();
        $(this).addClass('active').siblings('a').removeClass('active');
        $parent_dom.nextAll(":not('."+"_href"+"')").hide().end().nextAll('.'+_href).show();
    });
})(jQuery);