import React, { Component } from "react";
import { connect } from "react-redux";

import ListItem from "../components/leaderboardItem";
import { dashboardRoutes } from "../constants";

export default class Dashboard extends Component {
	renderListItem(routes) {
		return routes.map((route, index) => {
			return <ListItem key={index} route={route} />;
		});
	}

	render() {
		return <div>{this.renderListItem(dashboardRoutes)}</div>;
	}
}
