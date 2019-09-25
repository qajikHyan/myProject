$(document).ready(function() {
    $('#fullpage').fullpage({
		sectionsColor: ['#fff', '#fff', '#fff'],
		anchors:['firstSection', 'secondSection', 'thirdSection', 'fourthSection'],
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
});