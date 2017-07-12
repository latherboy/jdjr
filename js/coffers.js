$(function() {
	var mySwiper1 = new Swiper('.lcqn_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
	var mySwiper2 = new Swiper('.everyday_banner', {
		autoplay: 3000,//可选选项，自动滑动
		pagination: '.swiper-pagination',
		loop: true,
		speed:2000,
		autoplayDisableOnInteraction: false,
		observer:true,
		observeParents:true
	});
	var mySwiper3 = new Swiper('.allowance_banner', {
		pagination: '.swiper-pagination',
		loop: true,
		speed:1000,
		autoplayDisableOnInteraction: false,
		observer:true,
		observeParents:true
	});
	var mySwiper4 = new Swiper('.wlcx_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
});