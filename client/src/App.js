import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {
            // we can use the links below since we set up the proxy for the server request
            // within the package.json file, re-directing the link every time to the specified route,
            // adding the original URL (or the href URL) as an extension to the specified route
          }
          <a href="/auth/google">Sign in with Google</a>
        </p>
      </div>
    )
  }
}

export default App
