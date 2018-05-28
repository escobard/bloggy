const express = require("express");

const routes = {
	port: process.env.PORT || 5000,
	root: "/",
	googleAuth: "/auth/google",
	googleAuthCallback: "/auth/google/callback",
	authenticatedUser: "/api/current_user",
	logout: "/api/logout",
	stripeRoute: "/api/stripe",
	jobs: "/api/jobs",
	jobsThanks: "/api/jobs/thanks",
	editProfile: "/api/profile/edit"
};

module.exports = routes;
