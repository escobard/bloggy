import { users } from "../constants"
import { ADD_USER, UPDATE_USER } from "../actions/types"

export default function(state = users, action) {
	switch (action.type) {
		case ADD_USER:
			let { questions } = action.payload

			let qArray = Object.values(questions)
			let lastQ = qArray.slice(-1)[0]
			let { id, author } = lastQ
			return {
				...state,
				[author]: {
					...state[author],
					id: author,
					name: author,
					avatarURL:
						"https://tylermcginnis.com/would-you-rather/tyler.jpg",
					questions: [...state[author].questions, id]
				}
			}
		case UPDATE_USER:
			let { qid, option } = action.payload
			return {
				...state,
				["guest"]: {
					...state["guest"],
					answers: {
						...state["guest"].answers,
						[id]: option
					}
				}
			}
		default:
			return state
	}
}
/* 


				*/
