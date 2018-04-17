import React, { Component } from "react";
import PropTypes from "prop-types";

// this is similar to connect from react-redux
import { reduxForm, Field } from "redux-form";
import TextField from "material-ui/TextField";

// more on this on redux-form.com
// shows a ton of examples that we can use for validation and quick validation helpers
// look at https://redux-form.com/7.3.0/examples/fieldlevelvalidation/ for login user creation val
class JobForm extends Component {
	renderField() {
		return <TextField hintText="Hint Text" />;
	}
	render() {
		return (
			<div>
				<TextField
					hintText="Ea. Full stack developer"
					floatingLabelText="Enter a Job Title"
				>
					<Field type="text" name="surveyTitle" component="input" />
				</TextField>
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