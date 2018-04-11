module.exports = (req, res, next) => {

	// checks to see if the user has less than 1 credit
	if (req.user.credits < 1) {
		return res
			// other static HTTP responses here: https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
			// the article above is super important to handle HTTP responses
			.status(403)
			.send({ error: "Not enough credits to create a job post" });
	}

	next();
};
