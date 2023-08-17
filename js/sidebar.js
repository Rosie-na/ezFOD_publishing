//좌측패널, 우측패널 여닫기
$(function(){
    $('.hide-sidebar-left').click(function() {
        $('.side-wrap-left').hide();
        $('.hide-sidebar-left').hide();
        $('.show-sidebar-left').show();
        $('.sidebar-left').css("flex-basis", 30);
    });

    $('.show-sidebar-left').click(function() {
        $('.side-wrap-left').show();
        $('.hide-sidebar-left').show();
        $('.show-sidebar-left').hide();
        $('.sidebar-left').css("flex-basis", 300);
    });

    $('.hide-sidebar-right').click(function() {
        $('.side-wrap-right').hide();
        $('.hide-sidebar-right').hide();
        $('.show-sidebar-right').show();
        $('.sidebar-right').css("flex-basis", 30);
    });

    $('.show-sidebar-right').click(function() {
        $('.side-wrap-right').show();
        $('.hide-sidebar-right').show();
        $('.show-sidebar-right').hide();
        $('.sidebar-right').css("flex-basis", 300);
    });
});