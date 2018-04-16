import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

export const AddButton = ({ route }) => (
	<Link to={route} className="navbar-image">
		<FloatingActionButton className="add-job">
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