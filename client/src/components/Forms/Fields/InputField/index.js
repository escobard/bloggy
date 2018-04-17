import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import { Field } from "redux-form";

import styles from "./styles.scss"

const InputField = ({hint, label, name}) => {
	return (
		<div className="input-field">
			<TextField
				hintText={hint}
				floatingLabelText={label}
				className="input-container"
			>
				<Field type="text" name={name} component="input" />
			</TextField>
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
	label: PropTypes.string
};

export default InputField;