$(function(){
	function tab(){
		$('li.tab').click(function(){
			var index =$(this).index();
			$(this).addClass('active').siblings().removeClass('active');
		})
	}
	tab();
})