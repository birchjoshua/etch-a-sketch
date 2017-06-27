$(document).ready(function(){
	for(i=0; i<=256; i++){
		$('.container').append('<div class="pixels"></div>')};
	$('.pixels').on('mouseenter', function() {
		$(this).addClass('hovered');
	})
  	$('.refresh').on('click', function() {
  		$('.pixels').remove();
  		var square = prompt("Enter the number of pixels to square:");
  		var squareInt = Number(square);
  		for(i=0; i<=squareInt*squareInt; i++){
			$('.container').append('<div class="pixels"></div>')};
		$('.pixels').css('height', 800/squareInt);
		$('.pixels').css('width', 800/squareInt);
		$('.pixels').on('mouseenter', function() {
			$(this).addClass('hovered');
		})
	})
	
})