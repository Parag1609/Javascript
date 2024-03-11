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
        
     });

     $('#previous').click(function(){
        counter--;
        if(counter<0){
            counter=imagecount-1;
            $("#slider ul").clone().appendTo("#slider");  //cloning the unordered list
            $("#slider ul").last().css("left",`-${totalwidth}`);

            leftposition=`-${counter * imagewidth}px`;

            $("#slider ul").last().animate({left:leftposition},700,"easeInQuad");
            $("#slider ul").first().animate({left:imagewidth+"px"},700,"easeInQuad",function(){
                $("slider ul").first().remove();
            });
            

        }
        else{
            leftposition=`-${counter * imagewidth}px`;
        $("#slider ul").animate({left:leftposition},700,"easeInQuad");
        }
        

     });

});