var twelveHourTime;
twelveHourTime = true;

function clock(){
	// document.getElementById("year").innerHTML = "2016";

	var today;
	today = new Date();

	var year;
	year = today.getFullYear();
	//console.log(year);

	var month;
	month = today.getMonth();
	//console.log(month);

	var monthOfTheYear;
	monthOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var date;
	date = today.getDate();
	//console.log(date);

	var day;
	day = today.getDay();
	//console.log(day);

	var dayOfTheWeek;
	dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


	var hour;
	hour = today.getHours();
	//console.log(hour);

	var minute;
	minute = today.getMinutes();
	//console.log(minute);

	var second;
	second = today.getSeconds();
	//console.log(second);


	document.getElementById("year").innerHTML = year;
	document.getElementById("month").innerHTML = monthOfTheYear[month];
	document.getElementById("date").innerHTML = date;
	document.getElementById("day").innerHTML = dayOfTheWeek[day];

	
	var hourColor;
	hourColor = Math.round(hour * 11.086);
	//console.log(hourColor);


	if(twelveHourTime == true){


		if(hour >= 12){
			document.getElementById("meridiem").innerHTML = "pm";
		}else{
			document.getElementById("meridiem").innerHTML = "am";
		}

		if(hour > 12){
			hour = hour - 12;
		}


	}else{
		document.getElementById("meridiem").innerHTML = "mil";
	}

	

	if(minute < 10){
		minute = "0" + minute;
	}

	if(second < 10){
		second = "0" + second;	
	}

	document.getElementById("hour").innerHTML = hour;
	document.getElementById("minute").innerHTML = minute;
	document.getElementById("second").innerHTML = second;

	var minuteColor;
	minuteColor = Math.round(minute * 4.322);
	//console.log(minuteColor);

	var secondColor;
	secondColor = Math.round(second * 4.322);
	//console.log(secondColor);

	document.body.style.backgroundColor = "rgb(" + hourColor + "," + minuteColor + "," + secondColor + ")";
}



function toggleTwelve(){
	//console.log("Toggle, YAY!");

	if(twelveHourTime == true){
		twelveHourTime = false;
		//console.log(twelveHourTime);
	}else{
		twelveHourTime = true;
		//console.log(twelveHourTime);
	}
}

clock();

// set interval will run every 10 ms in the background
// this is a way of having a function auto run
setInterval(clock, 10); //run 100x a sec?, every 10 milliseconds

// var counter = 0;

// function countTest(){
// 	counter++;
// 	console.log(counter);
// }

// countTest();
// setInterval(countTest, 1000);





