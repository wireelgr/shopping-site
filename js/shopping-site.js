$(document).ready(function() {
    // カルーセル
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true,
    });
    $(".sp_menu_icon").click(function() {
        $(this).next().slideToggle();
    });
    //サイドメニュー・アコーディオン
    $(".pagelink_bar").click(function() {
        $(".pagelink_li").slideToggle();
        $(".pagelink_bar").toggleClass("active");
    });
    //サイドメニュー・アコーディオン
    $(".categories_bar").click(function() {
        $(".categories_li").slideToggle();
        $(".categories_bar").toggleClass("active");
    });
    /*! ページトップへをヌルヌルさせる動きを実装 */
    $(function() {
        $(".pagetop a").click(function() {
            $('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow', 'swing');
            return false;
        })
    });
});
//メインメニュー・スライドショー
$(window).load(function() {
    $("#list_img img").click(function() {
        var img_src = $(this).attr("src");
        $("#display_img img").attr("src", img_src);
    });
});
    