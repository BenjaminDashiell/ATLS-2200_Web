// alert("Hello World"); //A basic alert
console.log("Hello World"); //A console log message.  Less annoying than an alert

// document.write(5+5); //+-*/

var firstname = "Benjamin";
var lastname = "Dashiell";

// document.write(firstname+lastname);
document.getElementById("welcome").innerHTML = "Welcome, " + firstname + " " + lastname + ". Thanks for joining us today";
 
function welcome(){
 	console.log("Welcome function worked");
 	var firstnameclick = document.getElementById("firstnametext").value;
 	var lastnameclick = document.getElementById("lastnametext").value;
 	document.getElementById("welcome").innerHTML = "Welcome, " + firstnameclick + " " + lastnameclick + ". Thanks for joining us today";
}

function imageswap(){
 	document.getElementById("image1").src = "img/iron-man.jpg";
 	// document.getElementById("image2").src = "img/storm.jpg";
 	document.getElementById("image3").src = "img/wolverine.jpg";
}

// function imagerollover(newimage){
function imagerollover(targetimage, newimage){
 	//document.getElementById("image4").src = "img/iron-man.jpg";
 	// document.getElementById("image4").src = "img/" + newimage;
 	document.getElementById(targetimage).src = "img/" + newimage;
}

function macky(){
	document.getElementById("cubuilding").src = "img/macky.jpg";
	document.getElementById("cutext").innerHTML = "Macky mmkay";
	document.getElementById("culink").innerHTML = "Learn about Macky";
	document.getElementById("culink").href = "https://www.colorado.edu/macky/";
}

function cssSwapper(){//https://www.w3schools.com/jsref/dom_obj_style.asp
	document.body.style.backgroundColor = "rgb(0,150,0)";
	document.body.style.color = "rgb(0,0,255)";
	document.body.style.fontFamily = "helvetica, arial, sans-serif";
	document.body.style.fontSize = "1.5em";
}