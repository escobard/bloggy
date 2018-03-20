import React, { Component } from "react";
import { FlatButton, AppBar, Drawer, RaisedButton } from "material-ui";
import DashIcon from "material-ui/svg-icons/action/dashboard";

import { server } from "../../constants/config";
import styles from "./styles.scss";

import NavItems from "./NavItems";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navItems: ["home", "dashboard", "addquestion"],
			open: false
		};
	}

	handleToggle = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		let { navItems, open } = this.state;

		return (
			<nav className="navbar navbar-light">
				<AppBar
					className="appbar"
					title={
						<a href="/">
							<img
								className="logo"
								src="/src/static/logo.jpg"
								alt="EngBook Logo"
							/>
						</a>
					}
					onLeftIconButtonClick={this.handleToggle}
					iconElementRight={
						<a href={`${server}/auth/google`}>
							<FlatButton className="login" label="Sign in with Google" />
						</a>
					}
				/>
				<Drawer
					open={open}
					docked={false}
					onRequestChange={open => this.setState({ open })}
					className="drawer"
				>
					<div className="navbar-top">
						<DashIcon />
					</div>
					{NavItems(navItems)}
				</Drawer>
			</nav>
		);
	}
}
