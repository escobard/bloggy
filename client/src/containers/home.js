import React, { Component } from "react"
import { connect } from "react-redux"

import { Tabs, Tab } from "material-ui/Tabs"
import SwipeableViews from "react-swipeable-views"

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
        <a href="/auth/google">Sign in with Google</a>
        <Tabs onChange={handleChange} value={slideIndex}>
          <Tab label="Unanswered" value={0} />
          <Tab label="Answered" value={1} />
        </Tabs>
        <SwipeableViews index={slideIndex} onChangeIndex={handleChange}>
          <div id="slide-1">{filterQuestions(qArray, selectQuestion)}</div>
          <div id="slide-2">
            {filterQuestions(qArray, selectQuestion, true)}
          </div>
        </SwipeableViews>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return { questions }
}

export default connect(mapStateToProps, { selectQuestion })(Home)
