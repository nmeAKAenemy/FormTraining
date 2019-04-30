$(document).ready(function(){
    $(".navbar-link").hover(function(){
        $(this).addClass("active");
    },
    function(){
        $(this).removeClass("active");
    });
});