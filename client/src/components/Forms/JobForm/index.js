import React, { Component } from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
// this is similar to connect from react-redux
import { reduxForm } from "redux-form";

import InputField from "../Fields/InputField";
// more on this on redux-form.com
// shows a ton of examples that we can use for validation and quick validation helpers
// look at https://redux-form.com/7.3.0/examples/fieldlevelvalidation/ for login user creation val

import { jobFormFields } from "../../../constants";

class JobForm extends Component {
	renderInputs = () => {
		return jobFormFields.map((field, index) => {
			let { hint, label, name } = field;
			return <InputField index={index} hint={hint} label={label} name={name} />;
		});
	};

	render() {
		console.log(jobFormFields);
		return (
			<div className="job-form">
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					{this.renderInputs()}
					<RaisedButton type="submit" label="Submit" />
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