$(function() {
	var mySwiper1 = new Swiper('.whitebar_banner', {
		autoplay: 3000,//可选选项，自动滑动
		pagination: '.swiper-pagination',
		loop: true,
		autoplayDisableOnInteraction: false,
		observer:true,
		observeParents:true
	});
	var mySwiper2 = new Swiper('.mrmx_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});
});