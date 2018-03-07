import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom'

import {indigo500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './components/app';
import reducers from './reducers';
const muiTheme = getMuiTheme({
  palette: {
    backgroundColor: indigo500,
  },
});

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
	  <MuiThemeProvider muiTheme={muiTheme}>
	    <App />
	  </MuiThemeProvider>
	</BrowserRouter>
  </Provider>
  , document.querySelector('.application'));
