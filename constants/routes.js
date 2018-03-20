const routes = {
	port: process.env.PORT || 5000,
	root: "/",
	googleAuth: "/auth/google",
	googleAuthCallback: "/auth/google/callback",
	authenticatedUser: "/api/current_user",
	logout: "/api/logout"
}

module.exports = routes