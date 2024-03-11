(function(){

    "use strict";
    document.getElementById('convert').addEventListener('submit',function (event) {

        event.preventDefault();

        var distance=parseFloat(document.getElementById('distance').value);
        var ans=document.getElementById('answer');
        //alert(distance);
        if(distance){
            var conversion= (distance*1.689344).toFixed(3);
            ans.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometres</h2>`;
            
            }
        else{
            ans.innerHTML='<h2>please provide a number</h2>';
        }	

    });  
}());