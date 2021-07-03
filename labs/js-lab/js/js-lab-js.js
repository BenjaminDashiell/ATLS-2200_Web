// for page one
function springSwap(){
    document.body.style.backgroundImage = "url('img/spring.jpg')";
    document.getElementById("seasonImage").src = "img/spring.jpg";
    document.getElementById("seasonHeading").innerHTML = "It's Spring!";
    document.getElementById("seasonText").innerHTML = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    document.body.style.fontFamily = "Dancing Script, cursive";
    document.body.style.fontSize = "1.5em";
    document.body.style.color = "rgb(177, 156, 217)";
    document.getElementById("content").style.backgroundColor="rgb(182, 231, 185)";
}
function summerSwap(){
    document.body.style.backgroundImage = "url('img/summer.jpg')";
    document.getElementById("seasonImage").src = "img/summer.jpg";
    document.getElementById("seasonHeading").innerHTML = "It's Summer!";
    document.getElementById("seasonText").innerHTML = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    document.body.style.fontFamily = "'Amatic SC', cursive";
    document.body.style.fontSize = "2em";
    document.body.style.color = "rgb(249, 243, 222)";
    document.getElementById("content").style.backgroundColor="rgb(46, 207, 202)";
}
function fallSwap(){
    document.body.style.backgroundImage = "url('img/fall.jpg')";
    document.getElementById("seasonImage").src = "img/fall.jpg";
    document.getElementById("seasonHeading").innerHTML = "It's Fall!";
    document.getElementById("seasonText").innerHTML = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    document.body.style.fontFamily = "Yanone Kaffeesatz, cursive";
    document.body.style.fontSize = "1.25em";
    document.body.style.color = "rgb(242, 174, 37)";
    document.getElementById("content").style.backgroundColor="rgb(107, 45, 35)";
}
function winterSwap(){
    document.body.style.backgroundImage = "url('img/winter.jpg')";
    document.getElementById("seasonImage").src = "img/winter.jpg";
    document.getElementById("seasonHeading").innerHTML = "It's Winter!";
    document.getElementById("seasonText").innerHTML = "Dolor ad veniam, irure deserunt consectetur id ullamco consequat. incididunt dolore nisi nulla sit amet, Excepteur fugiat elit, tempor Lorem laborum. enim ex magna qui mollit adipiscing Duis cillum Ut ipsum exercitation dolore pariatur. voluptate sed sunt officia sint non laboris eu aute est velit commodo et occaecat minim anim in eiusmod cupidatat aliquip nostrud do in aliqua. labore dolor ut esse ea proident, in ut reprehenderit culpa quis.";
    document.body.style.fontFamily = "Big Shoulders Inline Text, cursive";
    document.body.style.fontSize = "1.75em";
    document.body.style.color = "rgb(205, 227, 242)";
    document.getElementById("content").style.backgroundColor='rgb(125, 172, 200)';
}

// for page two
var myPicture = document.getElementById("slideshow");
var counter = 0;

var pictures;
pictures = [
			"img/panda1.jpg",
			"img/panda2.jpg",
			"img/panda3.jpg"
		];

var description;
description = [
    "Panda eating some bamboo",
    "Happy Panda wanting to say hello",
    "Lots of cute baby pandas. Aw!"
];

var links;
links = [
    "https://www.kdnuggets.com/2019/10/5-advanced-features-pandas.html",
    "https://towardsdatascience.com/an-introduction-to-pandas-in-python-b06d2dd51aba",
    "https://towardsdatascience.com/pandas-groupby-aggregate-transform-filter-c95ba3444bbb"
];

var linkdesc;
linkdesc = [
    "An Introduction to Pandas in Python",
    "Pandas’ group by explained in detail",
    "5 Advanced Features of Pandas and How to Use Them"
];

function nextSwap(){
	if(counter < pictures.length-1){
		counter++;
		myPicture.src = pictures[counter];
        document.getElementById("counter-check").innerHTML = "Counter: " + counter;
        document.getElementById("description").innerHTML = description[counter];
        document.getElementById("link").href = links[counter];
        document.getElementById("link").innerHTML = linkdesc[counter];
	}
	else{
		counter=0;
		myPicture.src = pictures[counter];
        document.getElementById("counter-check").innerHTML = "Counter: " + counter;
        document.getElementById("description").innerHTML = description[counter];
        document.getElementById("link").href = links[counter];
        document.getElementById("link").innerHTML = linkdesc[counter];
	}
}
function previousSwap(){
    if(counter > 0){
		counter--;
		myPicture.src = pictures[counter];
        document.getElementById("counter-check").innerHTML = "Counter: " + counter;
        document.getElementById("description").innerHTML = description[counter];
        document.getElementById("link").href = links[counter];
        document.getElementById("link").innerHTML = linkdesc[counter];
	}
	else{
		counter=2;
		myPicture.src = pictures[counter];
        document.getElementById("counter-check").innerHTML = "Counter: " + counter;
        document.getElementById("description").innerHTML = description[counter];
        document.getElementById("link").href = links[counter];
        document.getElementById("link").innerHTML = linkdesc[counter];
	}
}