import React, { Component } from "react"
import { connect } from "react-redux"

import {
	TextField,
	Card,
	CardActions,
	CardTitle,
	CardText,
	Snackbar,
	RaisedButton
} from "material-ui"

import { filterElement } from "../utils"

import {
	selectQuestion,
	fetchQuestion,
	updateQuestion,
	updateUser
} from "../actions"

import Answer from "../components/answer"
import { percentage } from "../components/answer/utils"

class Question extends Component {
	constructor(props) {
		super(props)

		this.state = {
			optionOneVotes: 0,
			optionTwoVotes: 0,
			open: false
		}
	}

	componentDidMount() {
		let {
			selectedQuestion: { author },
			location: { pathname },
			fetchQuestion,
			questions
		} = this.props

		if (!author) {
			let cleanPath = pathname.replace("/questions/", "")
			fetchQuestion(cleanPath, questions)
		}
	}

	handleClick = () => {
		this.setState({
			open: true
		})
	}

	handleRequestClose = () => {
		this.setState({
			open: false
		})
	}

	handleOptionVotes = (question, option) => {
		let {
			location: { pathname },
			fetchQuestion,
			updateQuestion,
			updateUser,
			questions
		} = this.props

		let cleanPath = pathname.replace("/questions/", "")
		updateQuestion(question, option)
		updateUser(question.id, option)
		fetchQuestion(cleanPath, questions)
	}

	renderQuestion(q, users) {
		let { author, optionOne, optionTwo, id } = q

		let uArray = Object.values(users)
		let filteredImage = filterElement(uArray, id).join("")

		let optionOneVotes = optionOne.votes ? optionOne.votes.length : 0
		let optionOneText = optionOne.text
		let optionTwoVotes = optionTwo.votes ? optionTwo.votes.length : 0
		let optionTwoText = optionTwo.text
		let totalVotes = optionOneVotes + optionTwoVotes
		let optionOnePercentage = percentage(
			totalVotes,
			optionOneVotes,
			optionTwoVotes
		)
		let optionTwoPercentage = percentage(
			totalVotes,
			optionTwoVotes,
			optionOneVotes
		)

		return (
			<div>
				<h1>Would you Rather</h1>
				<h3>
					BY:{" "}
					<img
						src={filteredImage}
						alt={author}
						className="author-image"
					/>
				</h3>
				<div onClick={this.handleClick}>
					<Answer
						voteCount={optionOneVotes}
						text={optionOneText}
						percentage={optionOnePercentage}
						handler={() => this.handleOptionVotes(q, "optionOne")}
					/>
					<div className="answer-or">
						<span>OR</span>
					</div>
					<Answer
						voteCount={optionTwoVotes}
						text={optionTwoText}
						percentage={optionTwoPercentage}
						handler={() => this.handleOptionVotes(q, "optionTwo")}
					/>
				</div>
				<Snackbar
					open={this.state.open}
					message="Question Answered!"
					autoHideDuration={4000}
					onRequestClose={this.handleRequestClose}
				/>
			</div>
		)
	}

	render() {
		// this will be coming from redux reducer, based on the ID of the question
		// expects clean array of data
		let { selectedQuestion, users } = this.props
		if (!selectedQuestion.author) {
			return (
				<div>
					<p>Loading...</p>
				</div>
			)
		} else {
			return (
				<div className="question">
					{this.renderQuestion(selectedQuestion, users)}
				</div>
			)
		}
	}
}
function mapStateToProps({ selectedQuestion, questions, users }) {
	return { selectedQuestion, questions, users }
}

export default connect(mapStateToProps, {
	selectQuestion,
	fetchQuestion,
	updateQuestion,
	updateUser
})(Question)
