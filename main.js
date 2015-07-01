$(document).on('ready', function() {

	// outerShell.append(innerShell).append(text)
	var container = $('<div class="container"></div>');

	// Outer Shell 
	var outerShell = $('<div class="outer-shell"></div>');

	// Inner Shell 
	var innerShell = $('<div class="inner-shell"></div>');

	// Brand Label
	var brandlabel = $('<div class="brand label">CLOCKEX</div>');

	// Clock Screen 
	var clockScreen = $('<div class="screen"></div>');

	// Clock AM/PM indicator 
	var am = $('<div class="clock-text am-pm">AM</div>');
	var pm = $('<div class="clock-text am-pm">PM</div>');

	// Radio Label 
	var radiolabel = $('<div class="radio label">FM 88 92 96 100 104 108 MHz</div><div class="radio label">AM 54 60 80 100 130 160 x10kHz</div>');

	
	// //--- Clock workings ---//

	var currentTime = new Date()
	var hours = currentTime.getHours()
	var minutes = currentTime.getMinutes()

	if (minutes < 10)
	minutes = "0" + minutes

	var suffix = $(am).addClass('active');
	
	if (hours >= 12) {
	suffix = $(pm).addClass('active'), $(am).removeClass('active');
	hours = hours - 12;
	}
	if (hours == 0) {
	hours = 12;
	}


	// clock face text
	var text = $('<div class="clock-text time">' + hours + ":" + minutes + '</div>');


	$('body').prepend(container)
	$('.container').append(outerShell);
	outerShell.append(innerShell);
	innerShell.append(clockScreen).prepend(brandlabel).append(radiolabel);
	clockScreen.append(text).append(am).append(pm);


	



		

});