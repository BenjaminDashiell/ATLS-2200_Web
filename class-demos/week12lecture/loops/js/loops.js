var rando;

var pics = [
	"img/pic1.jpg",
	"img/pic2.jpg",
	"img/pic3.jpg",
	"img/pic4.jpg",
	"img/pic5.jpg"
];

var descriptions = [
	"pic1.jpg",
	"pic2.jpg",
	"pic3.jpg",
	"pic4.jpg",
	"pic5.jpg"
];

// rando = Math.round(Math.random()*20); //defining random number range 0-20

for(i=0; i<5; i++){
	//console.log("hello" + i);
	console.log("Loop has run" + (i+1) + "times so far.");	

	//rando = Math.random();
	rando = Math.round(Math.random()*5); //defining random number range 0-4
	console.log(rando);

	// document.getElementById("pics").innerHTML = "<img src='http://via.placeholder.com/350x150'>";

	// sets pics on webpage to placeholder images
	// document.getElementById("pics").innerHTML += "<img src='http://via.placeholder.com/350x150'>";

	// sets pics to one of the images in the area
	document.getElementById("pics").innerHTML += "<figure><img src='" + pics[rando] + "'><figcaption>" + descriptions[rando]+ "</figcaption></figure>";
}
