const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const mongoose = require("mongoose")

const keys = require("../constants/config")
const googleAuthCallback = require("../constants/routes").googleAuthCallback

const User = mongoose.model("users")

passport.use(	
	new GoogleStrategy({ 
		clientID: keys.googleClientID, 
		clientSecret: keys.googleClientSecret,
		callbackURL: googleAuthCallback,
		proxy: true
	},
	async (accessToken, refreshToken, profile, done) => {

			let existingUser = await User.findOne({
				email: profile.emails[0].value
			})
			
			if (existingUser) {

				// checks to ensure the account's googleId doesn't already exist
				let googleUser = await User.findOne({
					googleId: profile.id
				})

				if (googleUser) {
					// if the account already has a googleId, end the loop

					done(null, existingUser)
					return
				}
				// if the account does not, we have to add the googleId to the user
				// then handle conditional routing logic for these cases here - I envision this area

			} 
				
			// if no user exists, create a new User instance
			let foundUser = await new User({
				googleId: profile.id,
				email: profile.emails[0].value
			})

			.save()
			.done(null, foundUser)
		}
	)
)


passport.serializeUser((user, done) => {

	done(null, user.id)

})

passport.deserializeUser(async (id, done) => {
	
	let user = await User.findById(id)

	done(null, user)

})

