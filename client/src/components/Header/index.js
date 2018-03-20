import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatButton, AppBar, Drawer, RaisedButton } from "material-ui";
import DashIcon from "material-ui/svg-icons/action/dashboard";

import logo from "../../static/logo.jpg";
import styles from "./styles.scss";

import { logoutUser } from "../../actions";
import NavItems from "./NavItems";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navItems: ["home", "dashboard", "addquestion"],
			open: false
		};
	}
	renderLogin = () => {
		let { auth } = this.props;
		let text = auth ? "Log Out" : auth === "" ? "Loading..." : "Log in";
		let url = auth ? "/" : "auth/google";
		if (auth) {
		}
		return (
			<a href={url}>
				<FlatButton className="login" label={text} />
			</a>
		);
	};
	handleLoggout = () => {
		console.log("CLICKED");
		this.props.logoutUser();
	};
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
							<img className="logo" src={logo} alt="EngBook Logo" />
						</a>
					}
					onLeftIconButtonClick={this.handleToggle}
					iconElementRight={this.renderLogin()}
					onRightIconButtonClick={() => this.handleLoggout()}
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

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, { logoutUser })(Header);
