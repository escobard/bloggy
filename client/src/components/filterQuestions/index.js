import React, { Component } from "react"
import { Link } from "react-router-dom"

import { condition } from "./utils"

export default function(questions, selectQuestion, isUnanswered) {
  let answerFilter = questions.filter(question =>
    condition(question, isUnanswered)
  )

  return answerFilter.map((question, index) => {
    let { optionOne, optionTwo, id } = question
    let q1 = optionOne.text
    let q2 = optionTwo.text
    return (
      <Link key={index} to={`/questions/${id}`}>
        <p onClick={() => selectQuestion(question)}>
          {q1} or {q2}
        </p>
      </Link>
    )
  })
}
