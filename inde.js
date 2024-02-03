$(document).ready(function(){
    $('.title').click(function(){
        $('.container').addClass('Open');
    });

    $('.close').click(function(){
        $('.container').removeClass('Open');
    });
});