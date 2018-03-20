import React, { Component } from "react";
import { connect } from "react-redux";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="title">A social media for Software Engineers</h1>
        <a href="/auth/google">Sign in with Google</a>
      </div>
    );
  }
}
