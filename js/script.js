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
			}
		]

	});
});