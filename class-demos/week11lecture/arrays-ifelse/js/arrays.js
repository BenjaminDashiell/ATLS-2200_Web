var myPicture = document.getElementById("my-picture"); //variable stores id="my-picture"
var counter = 0;

var pictures;
pictures = [
			"img/kitten-lizard0990.jpg", 
			"img/kitten-lizard0991.jpg", 
			"img/kitten-lizard0992.jpg", 
			"img/kitten-lizard0993.jpg", 
			"img/kitten-lizard0994.jpg", 
			"img/kitten-lizard0995.jpg", 
			"img/kitten-lizard0996.jpg", 
			"img/kitten-lizard0997.jpg", 
			"img/kitten-lizard0998.jpg", 
			"img/kitten-lizard0999.jpg",
			"img/kitten-lizard1000.jpg",
			"img/kitten-lizard1001.jpg",
			"img/kitten-lizard1002.jpg",
			"img/kitten-lizard1003.jpg",
			"img/kitten-lizard1004.jpg",
			"img/kitten-lizard1005.jpg",
			"img/kitten-lizard1006.jpg",
			"img/kitten-lizard1007.jpg",
			"img/kitten-lizard1008.jpg",
			"img/kitten-lizard1009.jpg",
			"img/kitten-lizard1010.jpg"
		];

var narrative;
narrative = [
	"Huh",
	"what",
	"is",
	"this",
	"OH",
	"MY",
	"GOSH",
	"It's",
	"A",
	"Lizard!",
	"Um",
	"Here's",
	"A",
	"Bunch",
	"Of",
	"Random",
	"Bananas",
	"I",
	"Mean",
	"Words"
];

function changePicture(){
	// counter++;
	// myPicture.src = pictures[counter]; //sets the image equal to the image specified in the array
	// document.getElementById("counter-check").innerHTML = counter;
	// // eventually the page doesn't load pictures since array has a small amount

	if(counter < pictures.length-1){
		counter++;
		myPicture.src = pictures[counter];
		document.getElementById("counter-check").innerHTML = narrative[counter];
	}
	else{
		counter=0;
		myPicture.src = pictures[counter];
		document.getElementById("counter-check").innerHTML = narrative[counter];
	}
}