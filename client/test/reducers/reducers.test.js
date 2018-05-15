import authReducer from "../../src/reducers";
import { FETCH_USER, LOGOUT_USER } from "../../src/actions/types";
import toJson from "enzyme-to-json";

describe("Reducers", () => {
	it("renders the authReducer, with no state", () => {
		expect(authReducer(undefined, {})).toEqual({ auth: null, form: {} });
	});
	it("renders the authReducer, with un authenticated response", () => {
		expect(
			authReducer({ auth: "" }, { type: FETCH_USER, payload: "" })
		).toEqual({
			auth: false,
			form: {}
		});
	});
	it("renders the authReducer, with authenticated response", () => {
		expect(
			authReducer({ auth: {} }, { type: FETCH_USER, payload: {} })
		).toEqual({
			auth: {},
			form: {}
		});
	});
	it("matches authReducer snapshot", () => {
		expect(toJson(authReducer(undefined, {}))).toMatchSnapshot();
	});
});
