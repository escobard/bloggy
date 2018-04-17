import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { fetchUser } from "./actions/user";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Dashboard from "./containers/dashboard";
import Home from "./containers/home";
import Account from "./containers/account";
import Profile from "./containers/profile";
import Jobs from "./containers/jobs";
import NewJob from "./containers/newJob";
import Blog from "./containers/blog";

import styles from "./styles/global.scss";

class App extends Component {
  componentDidMount() {
    // fetches our user data from the backend
    this.props.fetchUser();
  }
  componentDidUpdate() {
    // ensuring any updates asynchronously update our credits
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/account" component={Account} />
            <Route path="/dashboard/profile" component={Profile} />
            <Route exact path="/dashboard/jobs" component={Jobs} />
              <Route path="/dashboard/jobs/new" component={NewJob} />
            <Route path="/dashboard/blog" component={Blog} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchUser })(App));
