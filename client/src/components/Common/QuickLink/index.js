import React, { Component } from "react";
import PropTypes from "prop-types";
import { RaisedButton, Card } from "material-ui";
import { Link } from "react-router-dom";
import DashIcon from "material-ui/svg-icons/action/dashboard";

import styles from "./styles.scss";

// add images and finish layout of 2x2 for each cta
// <img src="" alt={`${route} icon`} /> --- code for image when icon is replaced
export default class QuickLink extends Component {
	render() {
		let { img, route } = this.props.route;
		return (
			<div className="dashboard-cta col-md-4">
				<Link to={`/dashboard/${route}`}>
					<Card className="card">
						<DashIcon />
						<h4>{route}</h4>
					</Card>
				</Link>
			</div>
		);
	}
}

QuickLink.defaultProps = {
	route: {
		img: "test",
		route: "test"
	}
};

QuickLink.propTypes = {
	routeObject: PropTypes.object
};