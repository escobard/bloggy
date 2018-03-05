import React, { Component } from "react"
import {
    Card,
    CardActions,
    CardTitle,
    CardText,
    RaisedButton
} from "material-ui/Card"

import styles from "./styles.scss"

import { percentage } from "./utils"

export default function({ voteCount, text, percentage, handler }) {
    return (
        <div onClick={handler} className="answer col-md-6 col-sm-12">
            <Card>
                <CardTitle
                    title={percentage}
                    subtitle={`Votes: ${voteCount}`}
                />
                <CardText>{text}</CardText>
            </Card>
        </div>
    )
}
