$(document).ready(function() {
    $('#fullpage').fullpage({
		sectionsColor: ['#fff', '#fff', '#fff'],
		anchors:['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthhSection'],
		menu: '.main-nav ul',
		navigation: false,
        // navigationTooltips: ['firstSlide', 'secondSlide', 'secondSlide'],
		showActiveTooltip: true,
		navigationPosition: 'left',
		scrollingSpeed: 100,
	});

	$('.menu_btn').click(function(){
		$('.menu').addClass('open-menu')
		$('.menuWrapper').addClass('open-menuWrapper')
	})
	$('.close-div').click(function(){
		$('.menu').removeClass('open-menu')
		$('.menuWrapper').removeClass('open-menuWrapper')
	})

	$(".menu").on("swipe",function() {
		console.log('kkkkkk')
	 });
	const $menu = $('.menuWrapper');


	$(document).mouseup(e => {
		if (!$menu.is(e.target)
			&& $menu.has(e.target).length === 0)
		{
			$menu.removeClass('open-menuWrapper');
			$('.menu').removeClass('open-menu')

		}
	});

	$('.btn1').click(function(e){
		e.preventDefault();
		$('.modal_singl-up').addClass('open_modal_singl-up');
	})
	$('.sign_close').click(function(e){
		$('.modal_singl-up').removeClass('open_modal_singl-up');
	})

	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	  
	function validate() {
		var name = $("#name");
		var email = $("#mail");
		var phone = $("#phone");
		var status = [];
		if (!validateEmail(email.val())) {
			$("#mail").css('borderColor','red');
		} else {
			$("#mail").css('borderColor','#47c690');
			status.push('1')
		}

		if(name.val() == "") name.css('borderColor','red');
		else{
			name.css('borderColor','#47c690');
			status.push('2')
		}

		if( phone.val() == "" ) phone.parent().css('borderColor','red');
		else{
			phone.parent().css('borderColor','#47c690');
			status.push('3')
		}

		if(status.length === 3){
			$('.singnUS').remove();
			$('#row').prepend(`
			<div class="col-xl-6 col-lg-6">
				<p class="text_1">Thanks, for your interest. </p>
				<h1 class="title1" style="text-transform: inherit"> Bunty, it means a lot </h1>
				<p class="text_2">We’ll be launching in the coming weeks. <br>
					We’ll let you know once we’re ready.</p>
				<h1 class="numberGreen">1230</h1>
				<p class="text_3">People, ahead of you </p>
				<p class="text_4">Spread the word with your friends To jump ahead on <br>
				the queue & start Living Finin’s way of Life</p>
				<div class="icons_wrapper">
					<img src="images/icons/google.png" alt="">
					<img src="images/icons/fb.png" alt="">
					<img src="images/icons/watsup.png" alt="">
					<img src="images/icons/tweet.png" alt="">
				</div>
			</div>
			`);
		}
		
		return false;
	}
	  
	$(".sub").on("click", validate);
	// $(".sub").on("click", validate);

	// $(".sub").click(function(){
	// 	if($('#name').val() == "" && $('#phone').val() == ""){
	// 		$('#name').css('borderColor','red');
	// 		$('#phone').parent().css('borderColor','red');
	// 	}else{
	// 		$("#name").css('borderColor','#47c690');
	// 		$('#phone').parent().css('borderColor','#47c690');
	// 	}
	// })
	// $('#name').on("input", function(){
	// 	if($('#name').val() == ""){
	// 		$('#name').css('borderColor','red');
	// 	}else{
	// 		$("#name").css('borderColor','#47c690');
	// 	}
	// })

});