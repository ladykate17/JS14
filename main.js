$(document).on('ready', function() {

	
	//--- Clock workings ---//

	var myClock = setInterval(function(){ timer() }, 1000);

	function timer() {
	    var date = new Date();
	    var time = date.toLocaleTimeString().slice(0, 5);
	    var t2 = date.toLocaleTimeString();

		// console.log(t2.charAt((t2.length-2)));
	    
	    document.getElementById("clock").innerHTML = time;

	    if (time.charAt(4) === ':') {
	    	time = '0' + (date.toLocaleTimeString().slice(0, 4));
	    	document.getElementById("clock").innerHTML = time;
	    }

	    if ((t2.charAt((t2.length-2))) === 'A'){
	    	$(am).addClass('active');
	    }
	    else {
	    	$(am).removeClass('active');
	    	$(pm).addClass('active')
	    }
	}
	
	//--- Clock Arch. ---//

	// Container
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

	// clock face text
	var text = $('<div class="clock-text time" id="clock"></div>');

	// console.log(currentTime.toLocaleTimeString());

	$('body').prepend(container)
	$('.container').append(outerShell);
	outerShell.append(innerShell);
	innerShell.append(clockScreen).prepend(brandlabel).append(radiolabel);
	clockScreen.append(text).append(am).append(pm);


	



		

});