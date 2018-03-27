// set up these variables on heroku, more on that here: https://devcenter.heroku.com/articles/config-vars

module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	stripePublic: process.env.STRIPE_PUBLIC,
	stripeSecret: process.env.STRIPE_SECRET
}
