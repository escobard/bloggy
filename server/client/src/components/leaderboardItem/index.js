import React, { Component } from "react"
import {
	RaisedButton
} from "material-ui"
import { Link } from "react-router-dom"

import styles from "./styles.scss"

import { aNumber } from "./utils"

// add images and finish layout of 2x2 for each cta
export default function(routeObject) {
	let {img, route} = routeObject.route
	return (
		<div className="dashboard-cta col-md-12">
			<Link to={`/dashboard/${route}`}>
		    	<RaisedButton className="">
		    		{route}
		    	</RaisedButton>
	    	</Link>
    	</div>
	)
}
