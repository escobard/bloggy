import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss"

const JobReview = ({reviewData}) => {
	console.log('REVIEW DATA', reviewData)
	return (
		<div>
			<h5>Survey form review</h5>
		</div>
	);
};

JobReview.defaultProps = {
	reviewData: {}
};

JobReview.propTypes = {
	reviewData: PropTypes.object
};

export default JobReview;