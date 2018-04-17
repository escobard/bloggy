import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";

import { Field } from "redux-form";

const InputField = ({hint, label}) => {
	return (
		<div className="input-field">
			<TextField
				hintText={hint}
				floatingLabelText={label}
			>
				<Field type="text" name="surveyTitle" component="input" />
			</TextField>
		</div>
	);
};

InputField.defaultProps = {
	hint: "test hint",
	label: "test label"
};

InputField.propTypes = {
	hint: PropTypes.string,
	label: PropTypes.string
};

export default InputField;