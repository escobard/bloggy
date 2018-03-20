import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
	let { type, payload } = action;
	switch (type) {
		case FETCH_USER:
			// console.log(action);

			// essentiall this checks if the returned value is an empty string
			// an empty string is returned when the user is not authenticated by google
			// this allows us to test for cases when the user is not authenticated in, by checking the
			// value of payload
			return payload || false;
		default:
			return state;
	}
}
