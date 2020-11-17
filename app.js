const express = require('express');
const BodyParser = require('body-parser'); // this is a module for using post request in our app
const date = require(__dirname + "/date.js");

const app = express(); // we are creating a new instance of express

const items = ['Eat Food']; // we created an array to put new items into

const workItems = [];

app.set('view engine', 'ejs'); // we are using the ejs module to our app

app.use(BodyParser.urlencoded({extended:true})); // we use BodyParser obj to be able to use post request and pass data from the web page to the server

app.use(express.static("public")); // we use static method of express to create a public folder for static files like css, js and images

app.listen(3000, function(){
	console.log("The server is runnning on port 3000");
});

app.get('/', function(req, res){ // this is get request to the "/" route
	let today = date.getDate();
	let theDay = date.getDay();
	res.render('list', {today : today, listTitle: theDay, newItems: items}); // we render the today and theDay variables to the ejs template list.ejs in views folder
});

app.post('/', function(req, res){ 
	// console.log(req.body);
	let item = req.body.newItem; // this contains the new item created from the web page 
	if(req.body.list == "Work List"){
		workItems.push(item);
		res.redirect('/work');
	}else{
		items.push(item); // we added that new item to the items array
		res.redirect('/'); // we redirect to the root route to view the items
	}

});

app.get('/work', function(req, res){
	res.render('list', { today: 'work list', listTitle: 'Work List', newItems: workItems});
});

app.get('/about', function(req, res){
	res.render('about');
});



