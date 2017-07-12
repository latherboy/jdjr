$(function(){
	var registeSwiper = new Swiper('#registerCont',{
		speed:500,
		onSlideChangeStart: function(){
			$("#gzBtn a").removeClass('regUseCurr');
			$("#gzBtn a").eq(registeSwiper.activeIndex).addClass('regUseCurr');
		},
		autoHeight: true
	});
	$("#gzBtn a").on('touchstart mousedown',function(e){
		e.preventDefault();
		$("#gzBtn a").removeClass('regUseCurr');
		$(this).addClass('regUseCurr');
		registeSwiper.slideTo( $(this).index() );
	});
	$("#gzBtn a").click(function(e){
		e.preventDefault();
	});
	var MySwiper = new Swiper('.faxian_banner', {
		autoplay: 3000,//可选选项，自动滑动
		pagination : '.swiper-pagination',
		loop:true,
		autoplayDisableOnInteraction : false,
		observer:true,
		observeParents:true,
		speed:1500
	});
	var mySwiper2 = new Swiper('.laba_banner', {
		autoplay: 3000,
		direction : 'vertical',
		slidesPerView: 'auto',
		loop:true,
		speed:1000,
		paginationClickable: true,
		autoplayDisableOnInteraction : false,
		observer:true,
		observeParents:true
	});
	var mySwiper3 = new Swiper('.essay_banner', {
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 30,
		observer:true,
		observeParents:true
	});

});
