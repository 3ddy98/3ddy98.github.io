var counter = 0;

function talk(){

	counter = counter + 1;
	
	if (counter == 1){
		var stop1 = new Audio('sounds/stop.wav')
		stop1.play();
	}
	else if (counter == 2){
		var stop2 = new Audio('sounds/stop2.wav')
		stop2.play();
	}
	else if (counter == 3){
		var stop3 = new Audio('sounds/stop3.wav')
		stop3.play();
	}
	else if (counter == 4){
		var stop4 = new Audio('sounds/stop4.wav')
		stop4.play();
	}
	else if (counter == 5){
		var stop5 = new Audio('sounds/stop5.wav');
		stop5.play();
		document.body.innerHTML='<h1>Fuck Off</h1>';
	}

}
