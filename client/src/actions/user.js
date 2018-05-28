import axios from "axios";

import { FETCH_USER, LOGOUT_USER } from "./types";

export const fetchUser = () =>
	// this fetches our user data, which is only present in the API if the user has been authenticated
	// with google, handled by the passport google strategy

	// as a refreshed with redux thunk, the middleware looks for any returned FUNCTIONS
	// within an action creator, handling these first
	/*
		return function(dispatch) {
		axios
			.get(`${server}/api/current_user`)

			// then returns the data via an action creator object
			.then(res => dispatch({ type: FETCH_USER, payload: res }));
	};
	*/
	async dispatch => {
		// grabs the user profile object from the API, attaches it to res.data
		// could be refactored into a `routes constant` although largely unecessary
		// until the application scales further
		const res = await axios.get("/api/current_user");

		// console.log("RES", res.data);
		// then returns the data via an action creator object
		dispatch({ type: FETCH_USER, payload: res.data });
	};

export const logoutUser = () => async dispatch => {
	// triggers the logout function within the API with the a get request to the logout route
	const res = await axios.get("/api/logout");
	dispatch({ type: LOGOUT_USER, payload: "" });
};

// to handle our stripe payment token
export const handleToken = token => async dispatch => {
	// passes the token to our route, assuming we have a route in the API
	// route will be created shortly
	const res = await axios.post("/api/stripe", token);

	// since we are effectively just updating the user data, we can use the same action type
	// as FETCH_USER - this is most likely not best practice and is a simple shortcut in this scenario
	dispatch({ type: FETCH_USER, payload: res.data });
};
