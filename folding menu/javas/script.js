(function(){
    "use strict";
    const submenus=document.querySelectorAll('ul li ul');

		function hidesubmenus(){
			for(let i=0;i<submenus.length;i++){
				submenus[i].className='hide-menu';
			}
		}
		hidesubmenus();


		const a=document.getElementsByClassName('menulink');
		
		for(let i=0;i<a.length;i++){
			a[i].addEventListener('click',function(event){
				event.preventDefault();
				const thismenu=this.parentNode.querySelector('ul');
				//thismenu.className='show-menu';
				if(thismenu.classList.contains('hide-menu')){
					hidesubmenus();
					thismenu.className='show-menu';
				}
				else{
					thismenu.className='hide-menu';
				}
			});
		}
}());