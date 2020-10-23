window.onload = function(){
	//轮播图1
	var swiper = new Swiper('.main_list', {
		slidesPerView: 4,
		spaceBetween: 30,
		slidesPerGroup: 2,
		loop: false,
		loopFillGroupWithBlank: true,
		// pagination: {
		//   el: '.swiper-pagination',
		//   clickable: false,
		// },
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  });

	  //轮播图2
	  var swiper = new Swiper('.product_list', {
		slidesPerView: 2,
		spaceBetween: 20,
		slidesPerGroup: 2,
		loop: false,
		loopFillGroupWithBlank: true,
		// pagination: {
		//   el: '.swiper-pagination',
		//   clickable: false,
		// },
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  });

	  //吸顶效果
	  //返回顶部效果
	  $(window).scroll(function(){
		var scrollTop = Math.floor(document.documentElement.scrollTop || document.body.scrollTop);
		if (scrollTop >= 900) {
			$('#to_top').css('display','block');
		}else{
			$('#to_top').css('display','none');
		}
		if (scrollTop >= 100) {
			$('#header').css('position','fixed','top',0,'left',0);
		}else{
			$('#header').css('position','relative');
		}
	  })
	  
	  $('#to_top').click(function(){
		  document.documentElement.scrollTop = document.body.scrollTop = 0;
	  })



	  //本月主推的切换
}