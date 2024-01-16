$(function() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        //phone
    } else {
        //PC
        $(".about-history-list").flexslider({
            animation: "slide",
            slideshow: false,
            controlNav: false,
            itemWidth: 253,
            itemMargin: 31,
            prevText: "<",
            nextText: ">",
            move: 1
        });
    }
});