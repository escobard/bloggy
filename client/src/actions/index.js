import axios from "axios";

import { server } from "../constants/config";
import { FETCH_USER } from "./types";

export const fetchUser = () => {
	// this fetches our user data, which is only present in the API if the user has been authenticated
	// with google, handled by the passport google strategy

	// as a refreshed with redux thunk, the middleware looks for any returned FUNCTIONS
	// within an action creator, handling these first
	return function(dispatch) {
		axios
			.get("/api/current_user")

			// then returns the data via an action creator object
			.then(res => dispatch({ type: FETCH_USER, payload: res }));
	};
};
