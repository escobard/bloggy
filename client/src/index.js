import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
// required to work with async / await
import "babel-polyfill";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import App from "./app";
import reducers from "./reducers";

// just using this to check async. requests
import axios from "axios"
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<MuiThemeProvider>
				<App />
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>,
	document.querySelector(".application")
);
