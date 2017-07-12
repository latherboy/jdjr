$(function() {
	var mySwiper1 = new Swiper('.laba_banner', {
		autoplay: 1500,
		direction: 'vertical',
		slidesPerView: 'auto',
		loop: true,
		speed: 1000,
		paginationClickable: true,
		autoplayDisableOnInteraction: false,
		observer:true,
		observeParents:true
	});
	var mySwiper2 = new Swiper('.zjc_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
});