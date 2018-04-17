import { combineReducers } from "redux";

import {reducer as reduxForm } from "redux-form"

import authReducer from "./authReducer";

export default combineReducers({
	auth: authReducer,

	// this is necessary to globally utilize the redux-form state
	form: reduxForm
});
