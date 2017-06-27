$(document).ready(function(){
	for(i=0; i<=256; i++){
		$('.container').append('<div class="pixels"></div>')};
	$('.pixels').on('mouseenter', function() {
		$(this).addClass('hovered')
	})
  
})