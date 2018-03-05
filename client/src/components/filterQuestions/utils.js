export const condition = (question, isUnanswered) => {
  		if (isUnanswered) {
  			return question.answered != true
  		}
  		return question.answered == true
  	}
