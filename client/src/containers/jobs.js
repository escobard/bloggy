import React, { Component } from "react";
import { connect } from "react-redux"

import { AddButton } from "../components/Common";
/* 
- Route to handle survey feature.
*/

// remember to create a breadcrumb component for tertiary pages
// the add job component should also be added on the dashboard as a quicklink
class Job extends Component {
	render() {
		return (
			<div className="jobs">
				<h1 className="title">User Job</h1>
				<AddButton route={"/dashboard/jobs/new"}/>
			</div>
		);
	}
}

function mapStateToProps({ questions }) {
	return { questions };
}

export default connect(mapStateToProps)(Job);