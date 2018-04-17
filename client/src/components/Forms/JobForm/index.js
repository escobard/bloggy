import React, { Component } from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
// this is similar to connect from react-redux
import { reduxForm } from "redux-form";

import TextField from "../Fields/TextField";
// more on this on redux-form.com
// shows a ton of examples that we can use for validation and quick validation helpers
// look at https://redux-form.com/7.3.0/examples/fieldlevelvalidation/ for login user creation val
class JobForm extends Component {
	render() {
		return (
			<div className="job-form">
				<form action="">
					<TextField
						hint={"Ea. Full stack developer"}
						label={"Enter a Job Title"}
					/>
				</form>
			</div>
		);
	}
}

JobForm.defaultProps = {
	test: "test"
};

JobForm.propTypes = {
	test: PropTypes.string
};

export default reduxForm({
	// these options customize how we want the form to behave
	form: "jobForm"
})(JobForm);