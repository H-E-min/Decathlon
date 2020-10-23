window.onload = function(){
	//加载图片
	let $ul = $('#right ul');
	$.get('../json/lis.json',(data)=>{
		data.forEach((value) => {
			// console.log(value);
			$ul.append(
				`
				<li>
				<span class="new_product">新品</span>
				<img src="${value.src}" alt="">
				<span class="price_big">${value.price_big}</span>
				<span class="price_little">.${value.price_little}</span>
				<h5>${value.titile}</h5>
				<p>${value.text}</p>
				</li>
				`
			)
		});
	})




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

}