import { questions } from "../constants"

import { ADD_QUESTION, UPDATE_QUESTION } from "../actions/types"

import { formatQuestion } from "../utils"

export default function(state = questions, action) {
	switch (action.type) {
		case ADD_QUESTION:
			const formattedQuestion = formatQuestion(action.payload)
			return {
				...state,
				[formattedQuestion.id]: formattedQuestion
			}
		case UPDATE_QUESTION:
			let { question, option } = action.payload
			return {
				...state,
				[question.id]: {
					...state[question.id],
					[option]: {
						text: question[option].text,
						votes: question[option].votes.concat(["guest"])
					},
					answered: true
				}
			}
		default:
			return state
	}
}
