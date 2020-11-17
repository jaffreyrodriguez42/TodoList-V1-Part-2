exports.getDate = function(){
	const d = new Date(); // we created a new Date object
	const options = {        //second argument that will be used in the Date obj method toLocaleDateString
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	}
	return d.toLocaleDateString("en-US", options); //it will output for ex "Wednesday. October 21"
}

exports.getDay = function(){
	let today;
	const d = new Date(); // we created a new Date object
	const day = d.getDay(); // we used the getDay method of Date object // output is 0-6
	if(day == 0 || day == 6){
		today = "Weekend";
	}else{
		today = "Weekday";
	}

	return today;
}


