import React, { Component } from "react"
import { connect } from "react-redux"

class Account extends Component {

  render() {

    return (
      <div>
      <h1 className="title">User Account</h1>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return { questions }
}

export default connect(mapStateToProps)(Account)
