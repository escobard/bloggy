import React, { Component } from "react"
import { connect } from "react-redux"

import { selectQuestion } from "../actions"
import filterQuestions from "../components/filterQuestions"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0
    }
  }

  // again, handlers that must manipulate state can be used with this kind of declaration
  // without needing to declare the .this statement
  handleChange = value => {
    this.setState({
      slideIndex: value
    })
  }

  render() {
    let {
      state: { slideIndex },
      props: { questions, selectQuestion },
      handleChange
    } = this
    let qArray = Object.values(questions)

    return (
      <div>
      <h1 className="title">A social media for Software Engineers</h1>
        <a href="/auth/google">Sign in with Google</a>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return { questions }
}

export default connect(mapStateToProps, { selectQuestion })(Home)
