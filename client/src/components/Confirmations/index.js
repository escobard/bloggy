import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.scss";

export class ReviewForm extends Component {
	renderData = reviewData => {
		let reviewKeys = Object.keys(reviewData)
		let reviewValues = Object.values(reviewData)

		return reviewValues.map((data, index) => {
			let label = reviewKeys[index];
			return (
				<Fragment key={index}>
					<h3>{label}</h3>
					<p>{data}</p>
				</Fragment>
			);
		});

	};
	render() {
		console.log(this.props.reviewData);
		return (
			<div>
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