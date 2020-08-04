//Random Number 

function randomNumberGenerate() {

	var val = Math.floor(1000 + Math.random() * 9000); //get Random Number
	document.getElementById("randomNumber").value = val;

}

// Input Random Number 

	
function inputNumber(Number) {

	document.getElementById("matchNumber").value += Number;

	if (Number == "backspace") {

	var val =	document.getElementById("matchNumber").value;
	document.getElementById("matchNumber").value = val.substr(0, val.lenght - 1);

	}
 
	if (Number == "clear") {

		document.getElementById("matchNumber").value = "";

	}
}



function pinMatcher() {

	let inputpin = document.getElementById("matchNumber").value;
	let rendomPin = document.getElementById("randomNumber").value;
	const submitButton = document.getElementById("submitButton");
	const errorMessage = document.getElementById("errorMessage");
	const successMessage = document.getElementById("successMessage");
	
	var count = 0;
	
	
	if (inputpin == rendomPin && inputpin != "") {

		successMessage.style.display = "block";
		errorMessage.style.display = "none";
		inputpin = "";

	}else{

		if(count >= 3){
			submitButton.disabled = true;
			submitButton.style.background = 'grey';	
			
		}else{
			
			count+= 1;
			document.getElementById("actionLeft").innerText = count+" try left";
			successMessage.style.display = "none";
			errorMessage.style.display = "block";
			inputpin = "";
		}
	}
	
		


}