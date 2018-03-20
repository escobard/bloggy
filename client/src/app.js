import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { fetchUser } from "./actions";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Dashboard from "./containers/dashboard";
import Home from "./containers/home";
import Account from "./containers/account";
import Profile from "./containers/profile";
import Survey from "./containers/survey";
import Blog from "./containers/blog";

import styles from "./styles/global.scss";

class App extends Component {
    componentDidMount() {
        // fetches our user data from the backend
        this.props.fetchUser();
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route path="/dashboard/account" component={Account} />
                    <Route path="/dashboard/profile" component={Profile} />
                    <Route path="/dashboard/survey" component={Survey} />
                    <Route path="/dashboard/blog" component={Blog} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(null, { fetchUser })(App));
