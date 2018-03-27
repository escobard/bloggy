import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FlatButton, AppBar, Drawer, RaisedButton } from "material-ui";
import DashIcon from "material-ui/svg-icons/action/dashboard";

import logo from "../../static/logo.jpg";
import styles from "./styles.scss";

import * as actions from "../../actions/user";
import NavItems from "./NavItems";
import Payments from "../Payments";

// usually all redux state would be handled within a container, but since
// the header component has no container this will be an exception
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navItems: ["home", "dashboard", "payments"],
			open: false
		};
	}
	renderLogin = () => {
		let { auth } = this.props;
		let text = auth ? "Log Out" : auth === "" ? "Loading..." : "Log in";
		let url = auth ? "# " : "auth/google";
		console.log(auth);
		return (
			<div className="authenticated-container">
				<a href={url} onClick={() => this.handleLoggout()}>
					<FlatButton className="login" label={text} />
				</a>
				{auth ? (
					<FlatButton className="credits" label={`Credits: ${auth.credits}`} />
				) : null}
				{auth ? <Payments handleToken={this.props.handleToken} /> : null}
			</div>
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
						<Link to="/" className="navbar-image">
							<img className="logo" src={logo} alt="EngBook Logo" />
						</Link>
					}
					onLeftIconButtonClick={this.handleToggle}
					iconElementRight={this.renderLogin()}
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

export default connect(mapStateToProps, actions)(Header);
