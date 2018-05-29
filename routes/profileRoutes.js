const { editProfile } = require("../constants/routes"),
requireLogin = require("../middlewares/requireLogin");

module.exports = app => {

	// adds the route to handle the new user data, saving it, returns updated data
	app.post(editProfile, requireLogin, async (req, res) =>{
		let { body, user } = req

		// this needs to be 100% validated on the front end
		// otherwise it may break other profile functionality

		// sets new data based on client side form entry
		user.email = body.email
		user.name = body.name
		user.jobTitle = body.jobTitle 
		user.age = body.age 

		// the async functionality here should technically work, but need to test
		const updatedUser = await req.user.save()

		res.send(updatedUser)
	})

}