import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Dashboard from "../containers/dashboard";
import Home from "../containers/home";
import AddQuestion from "../containers/addQuestion";
import Question from "../containers/question"
import Account from "../containers/account"
import Profile from "../containers/profile"
import Survey from "../containers/survey"
import Blog from "../containers/blog"

import styles from "../styles/global.scss"

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                        <Route path="/dashboard/account" component={Account} />
                        <Route path="/dashboard/profile" component={Profile} />
                        <Route path="/dashboard/survey" component={Survey} />
                        <Route path="/dashboard/blog" component={Blog} />
                    <Route exact path="/addquestion" component={AddQuestion} />
                    <Route exact path="/questions/:id" component={Question}/>
                </div>
                <Footer />
            </div>
        );
    }
}