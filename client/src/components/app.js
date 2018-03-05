import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Leaderboard from "../containers/leaderboard";
import Home from "../containers/Home";
import AddQuestion from "../containers/addQuestion";
import Question from "../containers/question"

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/leaderboard" component={Leaderboard} />
                    <Route exact path="/addquestion" component={AddQuestion} />
                    <Route exact path="/questions/:id" component={Question}/>
                </div>
                <Footer />
            </div>
        );
    }
}