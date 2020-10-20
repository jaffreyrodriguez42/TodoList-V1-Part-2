const express = require('express');
const BodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');



app.listen(3000, function(){
	console.log("The server is runnning on port 3000");
});

app.get('/', function(req, res){
	let today;
	let theDay;
	let d = new Date();
	let day = d.getDay();
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


	res.render('list', {today : today, theDay: theDay} );
});