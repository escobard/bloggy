import React, { Component } from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";

// this is similar to connect from react-redux
// more on this on redux-form.com
// shows a ton of examples that we can use for validation and quick validation helpers
// look at https://redux-form.com/7.3.0/examples/fieldlevelvalidation/ for login user creation val
import { reduxForm, Field } from "redux-form";

import InputField from "../Fields/InputField";

import validateEmails from "./utils";

import { jobFormFields } from "../../../constants";

import styles from "./styles.scss";

class JobForm extends Component {
	renderInputs = () => {
		return jobFormFields.map((field, index) => {
			let { hint, label, name } = field;
			return (
				<Field
					key={index}
					hint={hint}
					label={label}
					name={name}
					component={InputField}
				/>
			);
		});
	};

	render() {
		return (
			<div className="job-form">
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					{this.renderInputs()}
					<button>Submit</button>
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
// must be a vanilla function
function validate(values) {
	const errors = {};

	// redux form will assume that the form is valid if the
	// errors object is empty

	// this is a basic validation rule
	/* scrapped for a more scalable solution
	if (!values.title) {

		// adds an error to our errors object
		// this is automatically added to the redux form field that has the title property
		errors.title = "You must provide a title"
	}*/

	// loops through each of the values of the fields object ensuring
	// that none of the inputs are empty

	// checks the large recipient string vs email regex
	// then grabs the invalid emails and shows to user
	// passes an OR statement to avoid initial validation undefined string
	errors.recipients = validateEmails(values.recipients || "");

	// deconstructs to only grab the field.name property of each object
	// can create custom error messages by using a property of the passed object
	jobFormFields.forEach(({ name }) => {
		// essentially the same thing as the validation above to test if input is empty
		if (!values[name]) {
			errors[name] = `You must provide a ${
				name === "recipients" ? "recipient" : name
			}`;
		}
	});

	return errors;
}

export default reduxForm({
	// ES6 deconstruct, grabs the validate function
	// and passes it to the reduxForm HOC
	validate,

	// these options customize how we want the form to behave
	form: "jobForm"
})(JobForm);