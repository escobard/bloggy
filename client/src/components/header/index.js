import React, { Component } from "react"
import { FlatButton, AppBar, Drawer, MenuItem, RaisedButton } from "material-ui"
import { Link } from "react-router-dom"

import styles from "./styles.scss"

export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			navItems: ["home", "leaderboard", "addquestion"],
			open: false
		}
	}

	renderNavItems(items, auth) {
		return items.map((item, index) => {
			let link = item === "home" ? "/" : "/" + item

			return (
				<Link to={link} key={index} className="links">
					<MenuItem>{item}</MenuItem>
				</Link>
			)
		})
	}

	// for functions that must utilize the 'this' statement to handle state
	// use the fat bracket declaration as seen below
	handleToggle = () => {
		this.setState({ open: !this.state.open })
	}

	render() {
		return (
			<nav className="navbar navbar-light">
				<AppBar title="Redux Assesment" onClick={this.handleToggle} />
				<Drawer
					open={this.state.open}
					docked={false}
					onRequestChange={open => this.setState({ open })}
					className="drawer"
				>
					{this.renderNavItems(this.state.navItems)}
				</Drawer>
			</nav>
		)
	}
}
