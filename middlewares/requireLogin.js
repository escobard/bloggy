// this defines a middleware, which we can assign to any of our routes
// middlewares with express essentially do something with a request BEFORE it hits our API
module.exports = (req, res, next) => {
	// this checks if our user is signed in, or if passport has not assigned the user's model instance
	// to our req.user object
	if (!req.user) {
		// we want to return this here so we can break the operation
		return res
			.status(401)
			.send({ error: "Authorized route - only logged in users allowed." });
	}

	// otherwise, just move on to the next middlewares in the chain
	next();
};
