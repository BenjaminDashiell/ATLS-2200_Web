var pics = [
	"img/pk1.png",
    "img/pk2.png",
    "img/pk3.png",
    "img/pk4.png",
    "img/pk5.png",
    "img/pk6.png",
    "img/pk7.png",
    "img/pk8.png",
    "img/pk9.png",
    "img/pk10.png"
];

var descriptions = [
    "It's a Bulbasaur",
    "It's a Charamander",
    "It's a Squirtle",
    "It's a Pikachu",
    "It's a Chikorita",
    "It's a Cyndaquil",
    "It's a Totodile",
    "It's a Treecko",
    "It's a Torchic",
    "It's a Mudkip"
];

function loops(){
    // note for future, apparently declaring this variable needs to be inside the function
    // otherwise it kept it's default value of 0
    var runLoop = document.getElementById("runloop").value;
    console.log(runLoop)

    document.getElementById("pics").innerHTML = ""; //to clear previous gallery cause of the +=

    for(i=0; i<runLoop; i++){
        // alert("loop is running")

        // adds pics to the gallery
        //document.getElementById("pics").innerHTML += "<figure><img src='" + pics[i] + "'><figcaption>" + descriptions[i]+ "</figcaption></figure>";
        document.getElementById("pics").innerHTML += "<figure id='test'><img src='" + pics[i] + "' alt='inserted-image'><figcaption>" + descriptions[i]+ "</figcaption></figure>";
    }
}
