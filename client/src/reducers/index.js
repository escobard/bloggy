import { combineReducers } from "redux"

import questions from "./questions"
import users from "./users"
import selectedQuestion from "./selectedQuestion"

const rootReducer = combineReducers({
	selectedQuestion,
	questions,
	users
})

export default rootReducer
