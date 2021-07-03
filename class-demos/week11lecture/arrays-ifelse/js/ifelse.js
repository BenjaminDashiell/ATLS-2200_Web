var myImage = document.getElementById("my-image");
var myButton = document.getElementById("my-button");
var myTemperature = document.getElementById("my-temperature");

var temperature;

pressed = false;

function checkWeather(){

	temperature = myTemperature.value;
	
	if(temperature >= 85){
		myImage.src = "img/summer.jpg";
	}else if(temperature < 85){
		myImage.src = "img/winter.jpg";
	}


	if(pressed == false){
		myButton.innerHTML = "Pressed";
		pressed = true;
	}else{
		myButton.innerHTML = "Check Weather";
		pressed = false;
	}


}