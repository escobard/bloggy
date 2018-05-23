import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.scss";

export class ReviewForm extends Component {
	renderData = reviewData => {
		let reviewKeys = Object.keys(reviewData);
		let reviewValues = Object.values(reviewData);

		return reviewValues.map((data, index) => {
			let label = reviewKeys[index];
			return (
				<div key={index} className="job-field">
					<p className="first">{label}</p>
					<p>{data}</p>
				</div>
			);
		});
	};
	render() {
		console.log(this.props.reviewData);
		return (
			<div className="review-job">
				{this.renderData(this.props.reviewData)}
			</div>
		);
	}
}

ReviewForm.defaultProps = {
	reviewData: "reviewData"
};

ReviewForm.propTypes = {
	reviewData: PropTypes.object
};