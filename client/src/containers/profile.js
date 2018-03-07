import React, { Component } from "react"
import { connect } from "react-redux"

class Profile extends Component {

  render() {

    return (
      <div>
      <h1 className="title">User Profile</h1>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return { questions }
}

export default connect(mapStateToProps)(Profile)
