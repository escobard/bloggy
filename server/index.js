
// for detailed notes on express / passport authentication 
// mongodb user retention / token creation go to 
// https://github.com/escobard/Advanced-React-and-Redux/tree/master/auth

// official express here: https://expressjs.com/en/starter/hello-world.html
const express = require('express');

// this invokes the express helpers, which has prototypes that allow us to 
// better manipulate node runtime HTTP requests / responses

// express app to register this route handler with
const app = express();

// watches for incoming 'get' HTTP request method within the '/' route
// this is called a route handler - more here: https://expressjs.com/en/starter/basic-routing.html

/* 

other HTTP requests supported include:

app.get - GET HTTP request - used to retreive or fetch info - most common type of request

app.post - POST HTTP request - used to send info

app.put - PUT HTTP request - used to update data

app.delete - DELETE HTTP request - used to delete data

app.patch - update one or two properties of something 

*/

app.get('/',

// handles the request response as req and respose as res

// req is the object representing the incoming request
// res is the object representing the outgoing response
(req, res) => {

	// displays important request data
	console.log('headers: ', req.headers)
	console.log('raw headers: ', req.rawHeaders)

	// sends the json object below to the route specified
	res.send({ hi: 'there' });

})

// listens for requests on the port specified
app.listen(5000);