const express = require('express');

const routes = require('./routes');
const portRoute = require('./constants/routes').port;

// this wont be used here, we just need the passport services to run with the server
// so we include it like so
// requires passport to start passport service at runtime
require('./services/passport');

// requires mongoose init file from to connect to mongodb at runtime
require('./models')

const app = express();

routes(app);

const server = app.listen(portRoute, () => {
	console.log('server listening at port %s', portRoute)
});

module.exports = server;

/* 

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

other HTTP requests supported include:

app.get - GET HTTP request - used to retreive or fetch info - most common type of request

app.post - POST HTTP request - used to send info

app.put - PUT HTTP request - used to update data

app.delete - DELETE HTTP request - used to delete data

app.patch - update one or two properties of something 



app.get('/',

// handles the request response as req and respose as res

// req is the object representing the incoming request
// res is the object representing the outgoing response
(req, res) => {

	console.log('headers: ', req.headers)

	// sends the json object below to the route specified
	res.send({ hi: 'there' });

})

// listens for requests on the port specified

// adding a function for testing 

const server = app.listen(5000, () => {
	const port = server.address().port;
	console.log('server listening at port %s', port )
});

// this is the same as export default in ES6
module.exports = server;


*/