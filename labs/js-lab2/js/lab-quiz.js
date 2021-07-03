var sword = 0;
var shield = 0;
var bow = 0;
var spear = 0;

function quizcheck() {

    // Variables for quiz answers
	var answer1 = document.getElementById("question1").value;
	// console.log("Answer 1: " + answer1);
	var answer2 = document.getElementById("question2").value;
	// console.log("Answer 2: " + answer2);
	var answer3 = document.getElementById("question3").value;
	// console.log("Answer 3: " + answer3);
    var answer4 = document.getElementById("question4").value;
	// console.log("Answer 4: " + answer4);
    
    // Checking if questions are left answered
	if(answer1==0){ //Alerts the user if they did not answer question 1.
	 	alert("You have not answered question 1");
	}
	if(answer2==0){ //Alerts the user if they did not answer question 2.
		alert("You have not answered question 2");
	}
	if(answer3==0){ //Alerts the user if they did not answer question 3.
		alert("You have not answered question 3");
	} 
    if(answer4==0){ //Alerts the user if they did not answer question 4.
		alert("You have not answered question 4");
    }

    //If all questions are answered
    if(answer1 > 0 && answer2 > 0 && answer3 > 0){        
        //Calculating scores
		//Question 1
		if (answer1==1){
			spear++;
		}
		if (answer1==2){
			shield++;
		}
		if (answer1==3){
			bow++;
        }
        if (answer1==4){
			sword++;
        }
        
        //Question 2
        if (answer2==1){
            sword++;
        }
        if (answer2==2){
            spear++;
        }
        if (answer2==3){
            shield++;
        }
        if (answer2==4){
            bow++;
        }

        //Question 3
        if (answer3==1){
            sword++;
        }
        if (answer3==2){
            shield++;
        }
        if (answer3==3){
            bow++;
        }
        if (answer3==4){
            spear++;
        }

        //Question 4
        if (answer4==1){
            sword++;
        }
        if (answer4==2){
            spear++;
        }
        if (answer4==3){
            shield++;
        }
        if (answer4==4){
            bow++;
        }
    
        //debugging (check values)
        // console.log("Answer 1: " + answer1);
        // console.log("Answer 2: " + answer2);
        // console.log("Answer 3: " + answer3);
        // console.log("Answer 4: " + answer4);

        //Results        
		if(sword > spear && sword > shield && sword > bow){
            // alert("you got sword");
            document.getElementById("imagedisplay").src = "img/sword.png";
            document.getElementById("textdisplay").innerHTML = "You got the sword hero! He's okay...";
        }
		else if(shield > spear && shield > sword && shield > bow){
            // alert("you got shield");
            document.getElementById("imagedisplay").src = "img/shield.jpg";
            document.getElementById("textdisplay").innerHTML = "You got the shield hero! The best one";
		}
		else if(bow > spear && bow > shield && bow > sword){
            // alert("you got bow");
            document.getElementById("imagedisplay").src = "img/bow.jpg";
            document.getElementById("textdisplay").innerHTML = "You got the bow hero!";
		}
		else if(spear > sword && spear > shield && spear > bow){
            // alert("you got spear");
            document.getElementById("imagedisplay").src = "img/spear.png";
            document.getElementById("textdisplay").innerHTML = "You got the trash, I mean, spear hero! Why did you pick the worst one? :/";
        }
        else{
            // default if there was a tie
            // alert("you got shield");
            document.getElementById("imagedisplay").src = "img/shield.jpg";
            document.getElementById("textdisplay").innerHTML = "You got the shield hero! The best one";
		}
        
		// reset to default
        sword = 0;
        shield = 0;
        bow = 0;
        spear = 0;
	}
}