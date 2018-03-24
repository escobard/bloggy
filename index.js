const express = require("express");

const cookieSession = require("cookie-session");
const passport = require("passport");
const helmet = require("helmet");

const portRoute = require("./constants/routes").port;
const cookieKey = require("./constants/config").cookieKey;

require("./models");

require("./services/passport");

const app = express();

app.use(helmet());

app.use(cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [cookieKey] }));

app.use(passport.initialize());
app.use(passport.session());

// this syntax allows us to abbreviate the require statement and immediately invoke our routes
/* replaces the following syntax:
	const routes = require('./routes')
	routes(app)
*/
require("./routes")(app);

let server = app.listen(portRoute, () => {
	console.log("server listening at port %s", portRoute);
});

module.exports = server;
