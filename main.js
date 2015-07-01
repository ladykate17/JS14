$(document).on('ready', function() {

	// outerShell.append(innerShell).append(text)
	var container = $('<div class="container"></div>');

	// Outer Shell 
	var outerShell = $('<div class="outer-shell"></div>');

	// Inner Shell 
	var innerShell = $('<div class="inner-shell"></div>');

	// Left AM/PM & Auto Labels 
	var labels = $('<div class="label">CLOCKEX</div>');

	// Clock Screen 
	var clockScreen = $('<div class="screen"></div>');

	// Clock AM/PM indicator 
	var am = $('<div class="clock-text am-pm">AM</div>');
	var pm = $('<div class="clock-text am-pm">PM</div>');

	
	// //--- Clock workings - not functional ---//
	// // hour
	// var hour = function(){
	// 	for (var i = 1; i <=12; i++){
	// 	if ( i < 10 ){
	// 		return '0'+ i;
	// 	}
	// 	else {
	// 		return i;
	// 	}

	// 	}
	// }
	// //minute
	// var minute = function(){
	// 	for (var j = 1; j < 60; j++){
	// 	if ( j < 10 ){
	// 		return '0'+j;
	// 	} 
	// 	else {
	// 		return j;	
	// 	}
	// // $(pm).addClass('active');
	
	// 	}
	// }

	// for (var k = 1; k < 60; k++){
	// 	hour()
	// 	return;
	// }

	// // am-pm
	$(pm).addClass('active');
	// // $(am).addClass('active');




	// clock face text
	var text = $('<div class="clock-text time">'+ 12 + ':' + 45 +'</div>');


	$('body').prepend(container)
	$('.container').append(outerShell);
	outerShell.append(innerShell);
	innerShell.append(clockScreen).prepend(labels);
	clockScreen.append(text).append(am).append(pm);


	



		

});