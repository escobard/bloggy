import React, { Component } from "react";
import { connect } from "react-redux";

/* 
  - scrapped - adapting linked in post style for ease
*/

class Blog extends Component {
  render() {
    return (
      <div>
        <h1 className="title">User Blog</h1>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return { questions };
}

export default connect(mapStateToProps)(Blog);
