document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function(e){
        var left = 0,
            top = 0,
            element = $('#header'),
            offset =  { left: element.offset().left, top: element.offset().top };
        element.bind('mousemove', function(e){
            left = (e.pageX-offset.left);
            top = (e.pageY-offset.top);
            $(this).css({
                backgroundPosition: '-'+(0.1*left)+'px -'+(0.05*top)+'px'

            });
        });
    });

});
