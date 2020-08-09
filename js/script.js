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

	$(document).on('click', '.class-link', function () {
		var linkID = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(linkID).offset().top
		}, 'slow');
	});

	AOS.init({
		// Global settings:
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: false, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


		// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
		offset: 150, // offset (in px) from the original trigger point
		delay: 50, // values from 0 to 3000, with step 50ms
		duration: 500, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: false, // whether animation should happen only once - while scrolling down
		mirror: false, // whether elements should animate out while scrolling past them
		anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

	});
});