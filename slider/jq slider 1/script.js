// Add your JS here

$(window).on('load', function(){

    'use strict';
     const imagecount=$('#slider ul li').length;
     const imagewidth=$('#slider ul li img').first().width();
     const totalwidth=(imagewidth * imagecount)+'px';
     

     let leftposition=0;
     let counter=0;
     $('#slider ul').css('width',totalwidth);

     $('#next').click(function(){
        counter++;
        if(counter===imagecount){
            counter=0;
        }
        leftposition=`-${counter * imagewidth}px`;
        $("#slider ul").animate({left:leftposition},700,"easeInQuad");
     });

     $('#previous').click(function(){
        counter--;
        if(counter<0){
            counter=imagecount-1;
        }
        leftposition=`-${counter * imagewidth}px`;
        $("#slider ul").animate({left:leftposition},700,"easeInQuad");

     });

});