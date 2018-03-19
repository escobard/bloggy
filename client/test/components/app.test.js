import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import Header from '../../src/components/Header';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme();
describe('Header - with mock state', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Header /> )  
    })

    it('+++ render the Header component', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});