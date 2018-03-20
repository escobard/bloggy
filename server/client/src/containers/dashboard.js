import React, { Component } from "react";
import { connect } from "react-redux";

import { addUser } from "../actions";
import ListItem from "../components/leaderboardItem";
import { dashboardRoutes } from "../constants";

class Dashboard extends Component {
	componentWillMount() {
		let { questions, addUser } = this.props;
		addUser(questions);
	}
	renderListItem(routes) {
		return routes.map((route, index) => {
			return <ListItem key={index} route={route} />;
		});
	}

	render() {
		return <div>{this.renderListItem(dashboardRoutes)}</div>;
	}
}

function mapStateToProps({ questions, users }) {
	return { questions, users };
}

export default connect(mapStateToProps, { addUser })(Dashboard);
