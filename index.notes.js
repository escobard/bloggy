const express = require("express")
const cookieSession = require("cookie-session")
const passport = require("passport")

// USE THIS FOR CROSS BROWSER ORIGIN RULES - SET UP COOKIE AUTH FOR CROSS DOMAINS
// const cors = require('cors');
// utilizes the CORS middleware to allow requests to the server from other domains
// this allows the CORS principle to be bypassed - you can also set rules for each domain you want to allow bypassing for
// app.use(cors());

// this may cause some issues, but it's installed for basic HTTP request security
// protecting most vulnerabilities with express / node.js server runtimes
const helmet = require("helmet")

const routes = require("./routes")
const portRoute = require("./constants/routes").port
const cookieKey = require("./constants/config").cookieKey

require("./models")

require("./services/passport")

const app = express()

// sets the helmet firewall to prevent vulnerabilities
// this may cause some issues, some functions may need to be disabled, expanded here: https://www.npmjs.com/package/helmet
app.use(helmet())

//tells our app to watch for cookies with the cookie-session library
// should probably refactor this into a service
app.use(
	// the object requires two arguments
	// first maxAge, specifies the max ammount of time the cookie exists in a browser in milliseconds
	cookieSession({
		// the calculation below calculates the exact amount of milliseconds in 30 days
		// should be revised later - 30 days for a cookie is a bit much IMO
		// breakdown in order: number of days, number of hours in a day, number of minutes in an hour,
		// number of seconds in a minute, and number of milliseconds in a second
		maxAge: 30 * 24 * 60 * 60 * 1000,
		// this argument creates a key for our cookie, which is private string set by the user
		// this is imported from our /config file
		keys: [cookieKey]
		// can set additional cookies for more security, as shown here: https://expressjs.com/en/advanced/best-practice-security.html
	})
)

// tells passport to use cookie-session to handle cookies, and the .session method which handles
// auth consistentcy
app.use(passport.initialize())
app.use(passport.session())

routes(app)

const server = app.listen(portRoute, () => {
	console.log("server listening at port %s", portRoute)
})

module.exports = server

/* 

// for detailed notes on express / passport authentication 
// mongodb user retention / token creation go to 
// https://github.com/escobard/Advanced-React-and-Redux/tree/master/auth

// official express here: https://expressjs.com/en/starter/hello-world.html
const express = require('express');

// this invokes the express helpers, which has prototypes that allow us to 
// better manipulate node runtime HTTP requests / responses

// requires mongoose init file from to connect to mongodb at runtime
require("./models")

// this wont be used here, we just need the passport services to run with the server
// so we include it like so
// requires passport to start passport service at runtime
require("./services/passport")
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
