import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import JobForm from "../components/Forms/JobForm"

// this entire container may look better with a dialog from material-ui
// more on dialogs here:  http://www.material-ui.com/#/components/dialog
class NewJob extends Component {
	render() {
		return (
			<div className="jobs">
				<h1 className="title">Add a New Job</h1>
				<JobForm />
			</div>
		);
	}
}

function mapStateToProps({ form }) {
	return { form };
}

export default connect(mapStateToProps)(NewJob);