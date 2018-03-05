import {
	ADD_QUESTION,
	UPDATE_QUESTION,
	ADD_USER,
	UPDATE_USER,
	SELECT_QUESTION,
	FETCH_QUESTIONS
} from "./types"

export function createQuestion(question) {
	return {
		type: ADD_QUESTION,
		payload: question
	}
}

export function updateQuestion(question, option) {
	return {
		type: UPDATE_QUESTION,
		payload: {
			question,
			option
		}
	}
}

export function addUser(questions, users) {
	return {
		type: ADD_USER,
		payload: {
			questions,
			users
		}
	}
}

export function updateUser(qid, option) {
	return {
		type: UPDATE_USER,
		payload: { qid, option }
	}
}

export function selectQuestion(question) {
	return {
		type: SELECT_QUESTION,
		payload: question
	}
}

export function fetchQuestion(path, questions) {
	return {
		type: FETCH_QUESTIONS,
		payload: {
			path,
			questions
		}
	}
}
