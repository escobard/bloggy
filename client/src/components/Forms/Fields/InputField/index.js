import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import styles from "./styles.scss"

const InputField = ({hint, label, name, meta, ...custom}) => {
	console.log('meta', meta)
	return (
		<div className="input-field">
			<TextField
				hintText={hint}
				floatingLabelText={label}
				className="input-container"
				errorText={meta.touched && meta.error}
				{...name}
				{...custom}
			/>
		</div>
	);
};

InputField.defaultProps = {
	hint: "test hint",
	label: "test label",
	name: "test name"
};

InputField.propTypes = {
	hint: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string
};

export default InputField;