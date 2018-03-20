import { FETCH_USER } from "../actions/types";

export default function(state = {}, action) {
	let { type, payload } = action;
	switch (type) {
		case FETCH_USER:
			console.log(action);
			return state;
		default:
			return state;
	}
}
