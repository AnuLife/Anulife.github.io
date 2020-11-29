var x = 0, y = 0,boxToX = 0,boxToY = 0;
boxToX = $(window).width()/2 - 300;
boxToY = $(window).height()/2 - 325;

$(function () {
    $("textarea").css({"height":$("textarea").scrollHeight+"px"})

    $.fn.autoHeight = function(){
        function autoHeight(elem){
            elem.style.height = 'auto';
            elem.scrollTop = 0; //防抖动
            elem.style.height = elem.scrollHeight + 'px';
        }
        this.each(function(){
            autoHeight(this);
            $(this).on('keyup', function(){
                autoHeight(this);
            });
        });
    }
    $('textarea[autoHeight]').autoHeight();
})
// $("textarea").addEventListener("input", function() {
//     console.log($("textarea").scrollHeight);
//     $("textarea").css({"height":$("textarea").scrollHeight+"px"})
// });