import React, { Component } from "react"
import { connect } from "react-redux"

import { addUser } from "../actions"
import ListItem from "../components/leaderboardItem"

class Dashboard extends Component {
	componentWillMount() {
		let { questions, addUser } = this.props
		addUser(questions)
	}
	renderListItem(list) {
		return list.map((item, index) => {
			return <ListItem key={index} users={item} />
		})
	}

	render() {
		let list = Object.values(this.props.users)
		console.log(this.props.users)
		return <div>{this.renderListItem(list)}</div>
	}
}

function mapStateToProps({ questions, users }) {
	return { questions, users }
}

export default connect(mapStateToProps, { addUser })(Dashboard)
