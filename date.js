module.exports.getDate = getDate;

// console.log(module);

function getDate(){
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

	let options = {        //second argument that will be used in the Date obj method toLocaleDateString
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	}

	theDay = d.toLocaleDateString("en-US", options); //it will output for ex "Wednesday. October 21"

	return theDay;
}

module.exports.getDay = getDay;

function getDay(){
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

	let options = {        //second argument that will be used in the Date obj method toLocaleDateString
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	}

	theDay = d.toLocaleDateString("en-US", options); //it will output for ex "Wednesday. October 21"

	return today;
}


