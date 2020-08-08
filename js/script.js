// Проверка, загрузилась ли страница
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__nav').toggleClass('_active')
		// $('body').toggleClass('_lock')
	});

	$('.slider-about').slick({
		dots: true,
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					arrows: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				}
			}
		]

	});

	$('.slider-logo').slick({
		dots: false,
		slidesToShow: 5,
		infinite: true,
		centerMode: true,
		speed: 800,
		asNavFor: '.slider-info',
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]

	});

	$('.slider-info').slick({
		dots: false,
		arrows: false,
		slidesToShow: 1,
		speed: 800,
		infinite: true,
		asNavFor: '.slider-logo'


	});
});