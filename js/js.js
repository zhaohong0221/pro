$(document).ready(function(){
	$(".home").width($(window).width());
	$(".home").height($(window).height());
	$(".home button").click(function(){
		$(".home").fadeOut();
		$(".main").fadeIn()
	});
	function getDates(){
		var img=$(".contect .fl img");
		var date=new Date();
		var hour=date.getHours()<10?"0"+date.getHours():date.getHours();
		var minute=date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
		img.attr("src","images/images/"+hour+"_"+minute+".jpg")
	};
	getDates();
	setInterval(getDates,60000)
})
	