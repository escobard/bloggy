import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import styles from "./styles.scss"

// more on redux-form and material-ui here: https://redux-form.com/7.2.3/examples/material-ui/
const InputField = ({hint, label, name, meta: { error, touched }, ...custom}) => {

	return (
		<div className="input-field">
			<TextField
				hintText={hint}
				floatingLabelText={label}
				className="input-container"
				errorText={touched && error}
				{...name}
				{...custom}
			/>
		</div>
	);
};

InputField.defaultProps = {
	hint: "test hint",
	label: "test label",
	name: "test name",
	meta: {
		error: 'test error',
		touched: true
	}
};

InputField.propTypes = {
	hint: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	meta: PropTypes.shape({
		error: PropTypes.string,
		touch: PropTypes.boolean
	})
};

export default InputField;