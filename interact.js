var counter = 0;

function speak(){
	alert("How did you figure that one out?! hidden2.html");
}

function whatdoesthisdo(){
	counter = counter + 1;
	if(counter == 25){
		alert("Well you figured it out, good job. You'll never get the next one... youfail.html")
	}
	if(counter == 15){
		alert("Stop, it couldn't possibly be this way.");
	}
}
function check(){
	var date = document.getElementById('national').value
	if(date == "2005-10-29"){
		window.location.href="https://www.youtube.com/watch?v=J---aiyznGQ";
		alert("Working");
		return false;
	}
	else{
		alert("Nope.")
	}
	return false;
}
