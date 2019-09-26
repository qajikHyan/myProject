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
		var email = $("#mail").val();
	  
		if (!validateEmail(email)) {
			$("#mail").css('borderColor','red');
		} else {
			$("#mail").css('borderColor','#47c690');
		}
		return false;
	}
	  
	$("#mail").on("input", validate);
	$(".sub").on("click", validate);

	$(".sub").click(function(){
		if($('#name').val() == "" && $('#phone').val() == ""){
			$('#name').css('borderColor','red');
			$('#phone').parent().css('borderColor','red');
		}else{
			$("#name").css('borderColor','#47c690');
			$('#phone').parent().css('borderColor','#47c690');
		}
	})
	$('#name').on("input", function(){
		if($('#name').val() == ""){
			$('#name').css('borderColor','red');
		}else{
			$("#name").css('borderColor','#47c690');
		}
	})

});