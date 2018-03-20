import * as actions from "../../src/actions";
import { FETCH_USER, LOGOUT_USER } from "../../src/actions/types";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const responses = {
	loggedOut: ""
};
/*
describe("Action snapshots", () => {
	it("+++ renders actions snapshot component", async () => {
		const expected = { type: FETCH_USER, payload: responses.loggedOut };
		expect(actions.fetchUser()).toEqual(expected);
	});
});


// base tester for async actions, need to work on this later

describe("Actions ", () => {
	it("returns data when sendMessage is called", done => {
		var mock = new MockAdapter(axios);
		const data = { response: true };
		let m = mock
			.onGet("https://us-central1-hutoma-backend.cloudfunctions.net/chat")
			.reply(200, data);
		let test = actions.fetchUser();
		console.log("TEST", test);
		console.log("M", m);
		expect(test).toEqual(m.data);
		done();
	});
});
*/

describe("running sample test file", () => {
	it("runs", () => {});
});
