import React from "react"
import { MenuItem } from "material-ui"
import { Link } from "react-router-dom"

// this should be refactored into a separate component
const NavItems = (links)  =>{
		return links.map((item, index) => {
			let link = item === "home" ? "/" : "/" + item

			return (
				<Link to={link} key={index} className="links">
					<MenuItem>{item}</MenuItem>
				</Link>
			)
		})
	}
export default NavItems