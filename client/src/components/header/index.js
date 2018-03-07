import React, { Component } from "react"
import { FlatButton, AppBar, Drawer, RaisedButton } from "material-ui"

import styles from "./styles.scss"
import NavItems from "./NavItems"

export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			navItems: ["home", "leaderboard", "addquestion"],
			open: false
		}
	}

	handleToggle = () => {
		this.setState({ open: !this.state.open })
	}

	render() {
		let {navItems, open} = this.state
		return (
			<nav className="navbar navbar-light">
				<AppBar className="appbar" title="EngBook" onClick={this.handleToggle} />
				<Drawer
					open={open}
					docked={false}
					onRequestChange={open => this.setState({ open })}
					className="drawer"
				>
					{NavItems(navItems)}
				</Drawer>
			</nav>
		)
	}
}
