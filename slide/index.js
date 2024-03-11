(function(){
    const myimages=["image1.jpg",'image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
        let currimg=0;

        document.getElementById('next').onclick=nextphoto;

        function nextphoto(){
            currimg++;
            if(currimg>myimages.length-1)currimg=0;
            document.getElementById('myimage').src=myimages[currimg];
        };

        document.getElementById('previous').onclick=previousphoto;

        function previousphoto(){
            currimg--;
            if(currimg<0)currimg=myimages.length-1;
            document.getElementById('myimage').src=myimages[currimg];
        };
}());