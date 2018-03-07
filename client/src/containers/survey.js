import React, { Component } from "react"
import { connect } from "react-redux"

/* 
- Route to handle survey feature.
*/

class Survey extends Component {

  render() {

    return (
      <div>
      <h1 className="title">User Survey</h1>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return { questions }
}

export default connect(mapStateToProps)(Survey)
