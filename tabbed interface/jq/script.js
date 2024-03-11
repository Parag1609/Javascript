(function(){
    $('#tabs >ul >li >a').click(function(){
        $('#tabs >ul >li >a').css({background:'#a2a2a2', color:'#cecece'});
        $(this).css({color:'#333',background:'#eaeaea'});
        const thistab= $(this).attr('href');
        $(' #tabs >div:visible').fadeOut(200,function(){
            $(thistab).fadeIn(200);
        });
        
    });
}());