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

import styles from "./styles.scss"

class JobForm extends Component {
	renderInputs = () => {
		return jobFormFields.map((field, index) => {
			let { hint, label, name } = field;
			return <InputField key={index} hint={hint} label={label} name={name} />;
		});
	};

	render() {
		console.log(jobFormFields);
		return (
			<div className="job-form">
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					{this.renderInputs()}
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

// validates the form
const validate = (values) =>{
	const errors = {}

	

	// redux form will assume that the form is valid if the
	// errors object is empty
	return errors;
}

export default reduxForm({
	// ES6 deconstruct, grabs the validate function
	// and passes it to the reduxForm HOC
	validate,
	
	// these options customize how we want the form to behave
	form: "jobForm"
})(JobForm);