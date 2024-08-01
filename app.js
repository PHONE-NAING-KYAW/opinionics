$(document).ready(function(){
	// Start Back to top

	$('.btn-backtotops').hide();
	$(window).scroll(function(){
		var getscrolltops = $(this).scrollTop();
		// console.log(getscrolltops);

		if(getscrolltops >= 370){
			$('.btn-backtotops').fadeIn(1000);
		}else{
			$('.btn-backtotops').fadeOut(1000);
		}
	})
	// End Back to top
	// Start Nav Bar
		$(window).scroll(function(){

			let position = $(this).scrollTop();
			// console.log(position);

			if(position >= 200){
				$('.navbar').addClass('navmenus');
			}else{
				$('.navbar').removeClass('navmenus');
			}
		});

		$('.navbuttons').click(function(){
			$(this).toggleClass('crossxs');
		});
	// End Nav Bar
	// Start Body

	$(window).scroll(function(){

		let position = $(this).scrollTop();
		// console.log(position);

		if(position >= 350){
			$('.bannerheaders, .bannerparagraphs').removeClass('bnanis');
		}else{
			$('.bannerheaders, .bannerparagraphs').addClass('bnanis');
		}

		if(position >= 80){
			$('.aboutuss img').addClass('fromlefts');
		}else{
			$('.aboutuss img').removeClass('fromlefts');
		}

		if(position >= 80){
			$('.aboutuss .another').addClass('fromrights');
		}else{
			$('.aboutuss .another').removeClass('fromrights');
		}
		
		if(position >= 480){
			$('.projects img').addClass('fromrights');
		}else{
			$('.projects img').removeClass('fromrights');
		}

		if(position >= 480){
			$('.projects .hello').addClass('fromlefts');
		}else{
			$('.projects .hello').removeClass('fromlefts');
		}

		if(position >= 850){
			$('.policies img').addClass('fromlefts');
		}else{
			$('.policies img').removeClass('fromlefts');
		}

		if(position >= 850){
			$('.policies .advtexts').addClass('fromrights');
		}else{
			$('.policies .advtexts').removeClass('fromrights');
		}
	});

	$('.navbuttons').click(function(){
		$(this).toggleClass('crossxs');
	});

	// End Body section

	// Start Footer Section

	const getyear = document.getElementById("getyear");
	const getfullyear = new Date().getFullYear();
	getyear.innerHTML = getfullyear;
	// End Footer Section
})
