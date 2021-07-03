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
	// hour = 12;
	console.log(hour);

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

		if(hour >= 12){
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

	var convertedHour 
	var convertedMin
	var convertedSec

	convertedHour = hour * 60 //hours to minutes

	//Had weird issues with minute and second returning as strings, so it messed with the integer values
	if(minute < 10){
		convertedMin = (parseInt(minute[1])+convertedHour) * 60
		// console.log(minute[1])
	}
	else{
		convertedMin = (minute+convertedHour) * 60 //minutes to secs
	}

	if(second < 10){
		convertedSec = convertedMin + parseInt(second[1])
		// console.log(second[1])
	}
	else{
		convertedSec = convertedMin + second //add up seconds
	}

	// convertedSec = 43200 //testing different times

	newHeight = (convertedSec/(86400/2)) * 335 //should be 334 if water image is centered
	scaledHeight = newHeight.toString()
	console.log("The current scaled water height is " + scaledHeight)

	document.getElementById("water").style.height = scaledHeight + "px";
	document.getElementById("water").style.width = "250px";
}

clock();

// set interval will run every 10 ms in the background
// this is a way of having a function auto run
setInterval(clock, 1000); //every 1sec = 1000 milliseconds