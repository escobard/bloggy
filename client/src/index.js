import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import App from "./components/app";
import reducers from "./reducers";

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
