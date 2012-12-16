var todo = arguments[0],
    deleteVisible = false;
    
$.container.on('swipe', function() {
	var rightVal = deleteVisible ? '-45dp' : 0;
	$.del.animate({
		left: rightVal,
		duration: 2500
	}, function () {
	  deleteVisible = !deleteVisible;	
	});
	
});
