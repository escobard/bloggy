import React, { Component } from "react";
import { connect } from "react-redux";

import Sidebar from "../components/Sidebar";
import Post from "../components/Post";

export default class Home extends Component {
	render() {
		return (
			<div>
				<h1 className="title">A social media for Software Engineers</h1>
				<Sidebar />
				<Post />
			</div>
		);
	}
}
