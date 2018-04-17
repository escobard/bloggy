import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import styles from "./styles.scss"

export const AddButton = ({ route, open }) => (
	<Link to={route} className="add-job" onClick={open}>
		<FloatingActionButton >
			<ContentAdd />
		</FloatingActionButton>
	</Link>
);

AddButton.defaultProps = {
	route: "/"
};

AddButton.propTypes = {
	route: PropTypes.string
};