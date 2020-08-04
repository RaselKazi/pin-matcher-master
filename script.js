//Random Number 

function randomNumberGenerate() {

	var val = Math.floor(1000 + Math.random() * 9000); //get Random Number
	document.getElementById("randomNumberOutput").value = val;

}

// Input Random Number 


function inputNumber(Number) {
	document.getElementById("matchNumberOutput").value += Number;

	if (Number == "backspace") {

		let val = document.getElementById("matchNumberOutput").value.length.toString()

	}

	if (Number == "clear") {

		document.getElementById("matchNumberOutput").value = "";

	}
}


function pinMatcher() {

	var pin = document.getElementById("matchNumberOutput").value;
	var rendomPin = document.getElementById("randomNumberOutput").value;
	const erroreNotify = document.getElementById("erroreNotify");
	const sussecMasses = document.getElementById("sussecNotify");
	var counter = 0;

	if (pin == rendomPin && pin != "") {

		
		sussecMasses.style.display = "block";
		erroreNotify.style.display = "none";
		document.getElementById("matchNumberOutput").value = "";

	} else {

		
		if(counter > 3){
	
			document.getElementById("submitButton").disabled = true;
			document.getElementById("submitButton").style.background = 'grey';	
		}else{
			counter++;
			document.getElementById("actionLeft").innerText = counter+" try left";
			sussecMasses.style.display = "none";
			erroreNotify.style.display = "block";
			document.getElementById("matchNumberOutput").value = "";
			
		}
		
		
	}


}