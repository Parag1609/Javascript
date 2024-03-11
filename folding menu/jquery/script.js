(function(){
    "use strict"
    $('ul li ul').hide();
			$('.menulink').click(function(){
				const thismenu=$(this).next('ul');

				/* if(thismenu.is(':visible')){
					thismenu.hide();
				}
				else{
					thismenu.show();
				} */
				$('ul li ul').not(thismenu).hide();
				thismenu.toggle();
			});
		
}())