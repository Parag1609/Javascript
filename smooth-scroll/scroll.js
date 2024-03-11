$('nav ul li a').click(function(){
    var thissection=$(this).attr('href');
    var thislink=$(this);

    $('html').stop().animate({scrollTop:$(thissection).offset().top -200},1000,
    'easeOutCirc',function(){
        $('nav ul li a').removeAttr('class');
        $(thislink).addClass('selected');
    });

});