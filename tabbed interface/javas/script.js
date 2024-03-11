(function(){
    'use strict'
        const tabs=document.querySelectorAll('#tabs > ul > li > a');
		/* for(let i=0; i<tabs.length;i++){
			tabs[i].addEventListener('click',selecttab);
		} */
        tabs.forEach(tab =>{
            tab.addEventListener('click',selecttab)
        })

		function selecttab(event){
			event.preventDefault();

			/* for(let i=0; i < tabs.length; i++){
				tabs[i].removeAttribute('class');
			} */

            tabs.forEach(tab =>{
                tab.removeAttribute('class');
            })
			
			event.target.className = 'active';


			const thistab= event.target.getAttribute('href');
			const thiscontent=document.querySelector(thistab);
			
			const oldcontent=document.querySelector('.visible');
			oldcontent.className='visuallyhidden';
			oldcontent.addEventListener('transitionend',function(){
				oldcontent.className='hidden';
				thiscontent.className='visible visuallyhidden';
				setTimeout(function(){ 
					thiscontent.classList.remove('visuallyhidden');
					
				},20);
			},{capture:false,once:true,passive:false});


		}
}());