import { combineReducers } from "redux"

import questions from "./questions"
import users from "./users"
import selectedQuestion from "./selectedQuestion"
import authReducer from "./authReducer"

export default combineReducers({
	selectedQuestion,
	authReducer,
	questions,
	users
})