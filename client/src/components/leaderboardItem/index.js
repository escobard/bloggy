import React, { Component } from "react"
import {
	Card,
	CardActions,
	CardHeader,
	CardText,
	FlatButton
} from "material-ui"

import styles from "./styles.scss"

import { aNumber } from "./utils"

export default function(user) {
	let { avatarURL, answers, questions, name } = user.users
	console.log(user)

	let qNumber = questions.length

	return (
		<Card className="leaderboard-item">
			<CardHeader title={name} avatar={avatarURL} />
			<CardText>
				Questions: {qNumber}
				<br />
				Answers: {aNumber(answers)}
			</CardText>
		</Card>
	)
}
