(function(){
    "use strict";
    let currimg=0;
        const myphotos=["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
        
        const container=document.getElementById('content');
        const nxtbtn=document.getElementById('next');
        const prevbtn=document.getElementById('previous');
        
        nxtbtn.addEventListener('click',function(event){
            event.preventDefault();
            currimg++;
            if (currimg > (myphotos.length -1)) { currimg=0;}
            swapimg();
            
        });
        
        prevbtn.addEventListener('click',function(event){
            event.preventDefault();
            currimg--;
            if (currimg <0) { currimg=(myphotos.length -1);}
           swapimg();
        });
        
        function swapimg(){
            const newslide= document.createElement('img')
            newslide.src=`slides/${myphotos[currimg]}`;
            newslide.className="fadeinimg";
            container.appendChild(newslide);
        
            if(container.children.length>2){
                container.removeChild(container.children[0]);
            }
        }
}());