import React, { Component } from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
// this is similar to connect from react-redux
import { reduxForm } from "redux-form";

import InputField from "../Fields/InputField";
// more on this on redux-form.com
// shows a ton of examples that we can use for validation and quick validation helpers
// look at https://redux-form.com/7.3.0/examples/fieldlevelvalidation/ for login user creation val
class JobForm extends Component {
	render() {
		return (
			<div className="job-form">
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					<InputField
						hint={"Ea. Full stack developer for x company"}
						label={"Enter a Job Title"}
						name={"title"}
					/>
					<InputField
						hint={"Ea. Full stack developer opportunity"}
						label={"Enter a Subject line for your job email"}
						name={"subject"}
					/>

					<InputField
						hint={"Ea. The job requires 3+ years of experience in..."}
						label={"Enter the job description"}
						name={"body"}
					/>

					<InputField
						hint={"Ea. The job requires 3+ years of experience in..."}
						label={"Enter your recipients"}
						name={"reicipients"}
					/>
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