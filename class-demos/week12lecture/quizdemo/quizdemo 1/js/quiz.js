var imagescore = 0;

var webscore = 0;

var textscore = 0;

function quizcheck() {

	var answer1 = document.getElementById("question1").value;
	console.log("Answer 1: " + answer1);

	var answer2 = document.getElementById("question2").value;
	console.log("Answer 2: " + answer2);

	var answer3 = document.getElementById("question3").value;
	console.log("Answer 3: " + answer3);

        
	if(answer1==0){ //Alerts the user if they did not answer question 1.
	 	alert("You have not answered question 1");
	}
	if(answer2==0){ //Alerts the user if they did not answer question 2.
		alert("You have not answered question 2");
	}
	if(answer3==0){ //Alerts the user if they did not answer question 3.
		alert("You have not answered question 3");
	}


	// if(answer1==0 || answer2==0 || answer3==0){ //Alerts the user if they did not answer question 3.
	// 	alert("You have not answered all of the questions");
	// } 

	if(answer1 > 0 && answer2 > 0 && answer3 > 0){
	
		//Question 1
		if (answer1==1){
			imagescore++;
		}

		if (answer1==2){
			webscore++;
		}

		if (answer1==3){
			textscore++;
		}

		//Question 2
	 	if (answer2==1){ 
			imagescore++;
		}

		if (answer2==2){
			webscore++;
		}

		if (answer2==3){ 
			textscore++;
		}

		//Question 3
		if (answer3==1){ 
			imagescore++;
		}

		if (answer3==2){ 
			webscore++;
		}

		if (answer3==3){ 
			textscore++;
		}

		document.getElementById("imagedisplay").innerHTML = "Image Score: "+imagescore;
		document.getElementById("webdisplay").innerHTML = "Web Score: "+webscore;
		document.getElementById("textdisplay").innerHTML = "Text Score: "+textscore;

	
		if(webscore > imagescore && webscore > textscore){
			//window.location.href="http://creative.colorado.edu/~halesi/atls2200";
			window.open("http://creative.colorado.edu/~halesi/atls2200");
		}

		if(imagescore > webscore && imagescore > textscore){
			window.location.href="http://www.colorado.edu";
		}

		if(textscore > webscore && textscore > imagescore){
			window.location.href="http://atlas.colorado.edu";
		}

		if(textscore == 1 && webscore == 1 && imagescore == 1){
			window.location.href="http://tam.colorado.edu";
		}
		
		// reset to default
		imagescore = 0;
		webscore = 0;
		textscore = 0;
	}
}