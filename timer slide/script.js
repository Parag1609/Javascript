// Add your JS here

$(window).on('load', function(){

    'use strict';
     const imagecount=$('#slider ul li').length;
     const imagewidth=$('#slider ul li img').first().width();
     const totalwidth=(imagewidth * imagecount)+'px';
     

     let leftposition=0;
     let counter=0;
     $('#slider ul').css('width',totalwidth);

    let abc=setInterval(slider,3000);

       function slider(){
        counter++;
         if(counter===imagecount){
            $("#slider ul").clone().appendTo("#slider");  //cloning the unordered list
            $("#slider ul").last().css("left",imagewidth+"px");

            leftposition=`-${totalwidth}`;
            $("#slider ul").last().animate({left:0},700,"easeInQuad");
            $("#slider ul").first().animate({left: leftposition},700,"easeInQuad",function(){
            $("#slider ul").first().remove();
            });


            counter =0;
        }
        else{
            leftposition=`-${counter * imagewidth}px`;
             $("#slider ul").animate({left:leftposition},700,"easeInQuad");
             }
       }
       
       document.getElementById('slider').addEventListener('mouseover',function(){
        clearInterval(abc);
       });

       document.getElementById('slider').addEventListener('mouseout',function(){
        abc=setInterval(slider,3000);
       });
});