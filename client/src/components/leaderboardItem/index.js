import React, { Component } from "react"
import {
	RaisedButton
} from "material-ui"

import styles from "./styles.scss"

import { aNumber } from "./utils"

export default function(routeObject) {
	let {img, route} = routeObject.route
	return (
    	<RaisedButton className="dashboard-cta col-md-12">
    		{route}
    	</RaisedButton>
	)
}
