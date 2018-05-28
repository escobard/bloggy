import React, { Component } from "react";
import { connect } from "react-redux";

import Chart from "../components/Charts";
import QuickLink from "../components/Common/QuickLink";
import { dashboardRoutes } from "../constants";

export default class Dashboard extends Component {
	renderQuickLink(routes) {
		return routes.map((route, index) => {
			return <QuickLink key={index} route={route} />;
		});
	}

	render() {
		return (
			<div className="dashboard">
				{this.renderQuickLink(dashboardRoutes)}
				<div className="charts">
					<div className="col-md-6">
						<Chart title={''} subtitle={''} description={''} variant={'pie'}/>
					</div>
					<div className="col-md-6">
						<Chart />
					</div>
				</div>
			</div>
		);
	}
}