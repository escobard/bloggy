import React, { Component } from "react"
import { connect } from "react-redux"

/* 
                    - Allow the user to create a basic post:
                        - Final version will have full forum.
                        - Base version will have a base page displaying all user posts (with pagination)
                        - Animated sidebar with widgets:
                            - User post stats (total posts, total likes, total comments on posts, etc)
                            - 5 most recent posts.
                            - Most posts by user.
                            - Most surveys by user.
                            - Highest rated user.
                            - Etc
*/

class Blog extends Component {

  render() {

    return (
      <div>
      <h1 className="title">User Blog</h1>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return { questions }
}

export default connect(mapStateToProps)(Blog)
