import { SELECT_QUESTION, FETCH_QUESTIONS } from "../actions/types"

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_QUESTIONS:
			let { path, questions } = action.payload
			let qArray = Object.values(questions)
			let filteredQuestion = qArray.filter(
				question => question.id == path
			)
			return { ...filteredQuestion[0] }
		case SELECT_QUESTION:
			return { ...action.payload }
		default:
			return state
	}
}
