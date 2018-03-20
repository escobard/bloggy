// this file will now control the environment logic
if (process.env.NODE_ENV === "production") {
	// we are in production, return prod set of keys
	module.exports = require("./config-prod");
} else {
	// we are in dev, return dev set of keys
	// this returns our dev set of keys, which are then added to any required route within the app
	module.exports = require("./config-dev");
}
