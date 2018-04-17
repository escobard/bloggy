import React, { Component } from "react";
import { connect } from "react-redux"

class NewJob extends Component {
	render() {
		return (
			<div className="jobs">
				<h1 className="title">Add a New Job</h1>
			</div>
		);
	}
}

function mapStateToProps({ questions }) {
	return { questions };
}

export default connect(mapStateToProps)(NewJob);