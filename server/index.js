const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const helmet = require("helmet");

const routes = require("./routes");
const portRoute = require("./constants/routes").port;
const cookieKey = require("./constants/config").cookieKey;

require("./models");

require("./services/passport");

const app = express();

app.use(helmet());

app.use(cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [cookieKey] }));

app.use(passport.initialize());
app.use(passport.session());

routes(app);

const server = app.listen(portRoute, () => {
	console.log("server listening at port %s", portRoute);
});

module.exports = server;
