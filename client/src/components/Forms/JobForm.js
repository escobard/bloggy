import React, { Component } from "react"
import PropTypes from "prop-types";

// this is similar to connect from react-redux
import { reduxForm } from "redux-form"

// more on this on redux-form.com
// shows a ton of examples that we can use for validation and quick validation helpers
// look at https://redux-form.com/7.3.0/examples/fieldlevelvalidation/ for login user creation val
class JobForm extends Component{
	render(){
		return(

		)
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
	form: 'jobForm'
})(SurveyForm)