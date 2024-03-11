(function(){
    "use strict";

    let converttype="miles";
    const heading=document.querySelector("h1");
    const intro=document.querySelector("p");
    const answerdiv=document.getElementById("answer");
    const form=document.getElementById("convert");

    document.addEventListener('keydown',function(event){
     var key=event.code;
        
     if(key==='KeyK'){
        converttype='kilometeres';
        heading.innerHTML='kilometeres to miles conversion';
        intro.innerHTML='type in a number of kilometres and click button to convert the distance into miles';
        
    }
     else if(key==='KeyM'){
        converttype='miles';
        heading.innerHTML='miles to kilometres conversion';
        intro.innerHTML='type in a number of miles and click button to convert the distance into kilometres';
     }
    });


    form.addEventListener('submit',function(event){
        event.preventDefault();

        const distance=parseFloat(document.getElementById('distance').value);

        if(distance){
            if(converttype==='miles'){
                const conversion= (distance*1.609344).toFixed(3);
                answerdiv.innerHTML=`<h2>${distance} miles is ${conversion} kilometres</h2>`;
            }
            else{
                const conversion=(distance*0.621371192).toFixed(3);
                answerdiv.innerHTML=`<h2>${distance} kilometres is ${conversion} miles</h2>`;
            }
        }
        else{
            answer.innerHTML='<h2>please provide a number</h2>';
        }

    });

}());