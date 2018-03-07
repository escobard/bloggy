import React, { Component } from "react"
import { connect } from "react-redux"

/* 
                    - Option to go to the user page in the future, displaying user account with several widgets.
                        + Add a widget to display survey data as testimonials.
                            = add option to disable displaying testimonials.
*/

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
