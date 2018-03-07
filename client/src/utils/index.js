export function filterElement(elements, id) {
	return elements.map((element, index) => {
		// checks if question matches user id
		// change as needed for other filters
		return (
			element.questions
				.map((question, index) => {
					if (question != id) {
						return
					}

					// if not, return user avatar
					return element.avatarURL
				})
				// this avoids the returning of an array, and instead returns a string removing the trailing comma.

				.join("")
		)
	})
}

function generateUID() {
	return (
		Math.random()
			.toString(36)
			.substring(2, 15) +
		Math.random()
			.toString(36)
			.substring(2, 15)
	)
}

export function _getUsers() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...users }), 1000)
	})
}

export function _getQuestions() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...questions }), 1000)
	})
}

export function formatQuestion({ optionOne, optionTwo, author }) {
	return {
		id: generateUID(),
		timestamp: Date.now(),
		author,
		optionOne: {
			votes: [],
			text: optionOne
		},
		optionTwo: {
			votes: [],
			text: optionTwo
		}
	}
}

export function _saveQuestion(question) {
	return new Promise((res, rej) => {
		const formattedQuestion = formatQuestion(question)

		setTimeout(() => {
			questions = {
				...questions,
				[formattedQuestion.id]: formattedQuestion
			}

			res(formattedQuestion)
		}, 1000)
	})
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			users = {
				...users,
				[authedUser]: {
					...users[authedUser],
					answers: {
						...users[authedUser].answers,
						[qid]: answer
					}
				}
			}

			questions = {
				...questions,
				[qid]: {
					...questions[qid],
					[answer]: {
						...questions[qid][answer],
						votes: questions[qid][answer].votes.concat([authedUser])
					}
				}
			}

			res()
		}, 500)
	})
}
