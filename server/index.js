
// need to use ES5 syntax for now to use express
// more about express here: https://expressjs.com/en/starter/hello-world.html
const express = require('express');

// this invokes the express helpers, which has prototypes that allow us to 
// better manipulate node runtime HTTP requests / responses
const app = express();

// receives response on main route
app.get('/',

// handles the request response as req and respose as res
(req, res) => {

	// sends the json object below to the route specified
	res.send({ hi: 'there' });

})

// listens for requests on the port specified
app.listen(5000);