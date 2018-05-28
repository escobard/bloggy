import React from "react"
import { MenuItem, RaisedButton } from "material-ui"
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import { Link } from "react-router-dom"

// more on menu icons here: http://www.material-ui.com/#/components/menu
// icons for each menu here: https://material.io/icons/
// explore adding icons later, like so:
/* 
	<Link to={link} key={index} className="links">
		<MenuItem leftIcon={<RemoveRedEye />}>{item}</MenuItem>
	</Link>
*/
const NavItems = (links, close)  =>{
		return links.map((item, index) => {
			let link = item === "home" ? "/" : "/" + item

			return (
				<Link to={link} key={index} className="links">
					<MenuItem onClick={close}>{item}</MenuItem>
				</Link>
			)
		})
	}
export default NavItems