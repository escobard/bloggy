import React, { Component } from "react"
import { connect } from "react-redux"

import { TextField, RaisedButton } from "material-ui"

import styles from "./styles.scss"

import { createQuestion, addUser } from "../actions"

class addQuestion extends Component {
	constructor(props) {
		super(props)

		this.state = {
			author: "",
			optionOne: "",
			optionTwo: ""
		}
	}

	authorHandler = event => {
		this.setState({
			author: event.target.value
		})
		console.log("author", this.state.author)
	}

	optionOneHandler = event => {
		this.setState({
			optionOne: event.target.value
		})
		console.log("option one", this.state.optionOne)
	}

	optionTwoHandler = event => {
		this.setState({
			optionTwo: event.target.value
		})
		console.log("option two", this.state.optionTwo)
	}

	submitQuestion = () => {
		let {
			state: { author, optionOne, optionTwo },
			props: { createQuestion }
		} = this
		console.log(author, optionOne, optionTwo)
		createQuestion({ optionOne, optionTwo, author })

		this.setState({
			author: "",
			optionOne: "",
			optionTwo: ""
		})
	}

	render() {
		let { author, optionOne, optionTwo } = this.state

		return (
			<div className="question-form">
				<TextField
					hintText="Enter your name"
					floatingLabelText="What's the Author's name?"
					value={author}
					onChange={this.authorHandler}
					className="options author"
				/>
				<TextField
					hintText="Enter your first option"
					floatingLabelText="Would you rather"
					value={optionOne}
					onChange={this.optionOneHandler}
					className="options first-option"
				/>
				<TextField
					hintText="Enter your second option"
					floatingLabelText="Or"
					value={optionTwo}
					onChange={this.optionTwoHandler}
					className="options second-option"
				/>
				<RaisedButton
					label="Primary"
					primary={true}
					onClick={() => this.submitQuestion()}
					className="submit-button"
				/>
			</div>
		)
	}
}

function mapStateToProps({ questions }) {
	return { questions }
}

export default connect(mapStateToProps, { createQuestion, addUser })(
	addQuestion
)
