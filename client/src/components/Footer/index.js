import React, { Component } from "react";

import styles from "./styles.scss";

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<span>
					{" "}
					&copy; Copyright 2018 -{" "}
					<a href="https://github.com/escobard">escobard@github.com</a>
				</span>
			</footer>
		);
	}
}
