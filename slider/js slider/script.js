window.addEventListener('load',function(){
    const slidecount=this.document.querySelectorAll('#slider-wrapper ul li').length;
    /* alert(slidecount); */
    const slidewidth=document.querySelector('#slider-wrapper').offsetWidth;
    const totalwidth=slidewidth*slidecount+'px';

    const slider=document.querySelector('#slider-wrapper ul');
    const next=document.getElementById('next');
    const previous=document.getElementById('prev');

    let leftposition=0;
    let counter=0;
    slider.style.width=totalwidth;

    next.addEventListener('click',function(event){
        event.preventDefault();
        counter++;
        if(counter===slidecount){
            counter=0;
           
        }
         leftposition=`-${counter*slidewidth}px`;
         slider.style.left=leftposition;
        
    })

    previous.addEventListener('click',function(event){
        event.preventDefault();
        counter--;
        if(counter<0){
            counter=slidecount-1;
        }
        
         leftposition=`-${counter*slidewidth}px`;
         slider.style.left=leftposition;
        
    })
})