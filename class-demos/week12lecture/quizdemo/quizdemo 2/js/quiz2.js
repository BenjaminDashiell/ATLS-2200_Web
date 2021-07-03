var imagescore = 0;

var webscore = 0;

var textscore = 0;

var answers = [];

var questions = document.getElementsByClassName("question");
console.log(questions.length);

// var answer;
var answer1;
var answer2;
var answer3;

function quizcheck() {

	answer1 = document.getElementById("question1").selectedIndex;
	console.log("Answer 1: " + answer1);

	answer2 = document.getElementById("question2").selectedIndex;
	console.log("Answer 2: " + answer2);

	answer3 = document.getElementById("question3").selectedIndex;
	console.log("Answer 3: " + answer3);

	answers.push(answer1);
	answers.push(answer2);
	answers.push(answer3);
	console.log(answers);

	// for(i=0; i<10; i++){
	// 	console.log(i + ". All work and no play makes Jack a dull boy");
	// }

	for(i=0; i<answers.length; i++){
		if(answers[i] == 0){
			var questionNum = i+1;
			alert("You did not answer question " + questionNum + ". Please select a valid answer.");
		}
	}

	// Better Version!!!

	// for(i=0; i<questions.length; i++){
	// 	answers.push(questions[i].selectedIndex);
	// }

	// console.log(answers);

	// for(i=0; i<answers.length; i++){
	// 	if(answers[i] == "0"){
	// 		var questionNum = i+1;
	// 		alert("You did not answer question " + questionNum + ". Please select a valid answer.")
	// 	}
	// }

	// function allQuizAnswered(currentValue) {
 //  		return currentValue > 0;
	// }

	// console.log(answers.every(allQuizAnswered));

	// if(answers.every(allQuizAnswered) == true){
	if(answer1 > 0 && answer2 > 0 && answer3 > 0){

		for(i=0; i<answers.length; i++){
			if(answers[i]==1){
				imagescore++;
			}else if(answers[i]==2){
				webscore++;
			}else if(answers[i]==3){
				textscore++;
			}
		}

		document.getElementById("imagedisplay").innerHTML = "Image Score: "+imagescore;
		document.getElementById("webdisplay").innerHTML = "Web Score: "+webscore;
		document.getElementById("textdisplay").innerHTML = "Text Score: "+textscore;
	
		if(webscore > imagescore && webscore > textscore){
			//window.location.href="http://creative.colorado.edu/~halesi/atls2200";
		}

		if(imagescore > webscore && imagescore > textscore){
			//window.location.href="http://www.colorado.edu";
		}

		if(textscore > webscore && textscore > imagescore){
			//window.location.href="http://atlas.colorado.edu";
		}

		if(textscore == 1 && webscore == 1 && imagescore == 1){
			//window.location.href="http://tam.colorado.edu";
		}
		
		imagescore = 0;
		webscore = 0;
		textscore = 0;
	}

	answers=[];
	console.log(answers);

	//answers.splice(0, answers.length);  //remove items from the answers array.  Go to position 0 in the array and remove all following entires
	//console.log("Answers length = "+answers.length);
	//answers.splice(0, answers.length);
	//console.log("Answers after splice = "+answers);
	
}