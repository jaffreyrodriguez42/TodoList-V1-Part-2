const express = require('express');
const BodyParser = require('body-parser'); // this is a module for using post request in our app

const app = express(); // we are creating a new instance of express

app.set('view engine', 'ejs'); // we are using the ejs module to our app



app.listen(3000, function(){
	console.log("The server is runnning on port 3000");
});

app.get('/', function(req, res){ // this is get request to the "/" route
	let today;
	let theDay;
	let d = new Date(); // we created a new Date object
	let day = d.getDay(); // we used the getDay method of Date object // output is 0-6
	console.log(day);
	if(day == 0 || day == 6){
		today = "Weekend";
	}else{
		today = "Weekday";
	}

	switch(day){
		case 1:
			theDay = "Monday";
			break;
		case 2:
			theDay = "Tuesday";
			break;
		case 3:
			theDay = "Wednesday";
			break;
		case 4:
			theDay = "Thursday";
			break;
		case 5:
			theDay = "Friday";
			break;
		case 6:
			theDay = "Saturday";
			break;
		case 7:
			theDay = "Sunday";
			break;
		default:
			theDay = "Undifined Day";
	}


	res.render('list', {today : today, theDay: theDay} ); // we render the today and theDay variables to the ejs template list.ejs in views folder
});