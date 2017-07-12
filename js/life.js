$(function() {
	var mySwiper1 = new Swiper('.life_banner', {
		autoplay: 3000,//可选选项，自动滑动
		pagination: '.swiper-pagination',
		loop: true,
		speed:1500,
		autoplayDisableOnInteraction: false,
		observer:true,
		observeParents:true
	});
	var mySwiper2 = new Swiper('.laba_banner', {
		autoplay:1500,
		direction: 'vertical',
		slidesPerView: 'auto',
		loop: true,
		speed: 1000,
		paginationClickable: true,
		autoplayDisableOnInteraction: false,
		observer:true,
		observeParents:true
	});
	var mySwiper3 = new Swiper('.zchw_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 0,
		observer:true,
		observeParents:true
	});
	var mySwiper4 = new Swiper('.classify', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
	var mySwiper5 = new Swiper('.baoxian_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
	var mySwiper6 = new Swiper('.jddz_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
	var mySwiper7 = new Swiper('.fanli_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
	var mySwiper8 = new Swiper('.hwzj_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
});