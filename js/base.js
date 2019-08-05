$(function(){
	$(".right-sidebar").height($(".main-content").height())

	$(".menu-icon-box").click(function() {
	
		if (window.innerWidth <= 992) {
			$(".right-sidebar").toggleClass("active")
		} else {
			$(".right-sidebar").toggleClass("toggle")
			$(".main-content").toggleClass("toggle")
		}
	})
	$(".sidebar-menu li").click(function(){
		var href=$(this).not(".active").attr("data-href")
		console.log(href)
		if(href){
			location.href=href
		}
	})
	$(window).resize(function(){
		$(".right-sidebar").height($(".main-content").height())
	})
})

