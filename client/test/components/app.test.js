import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import Header from '../../src/components/Header';
import renderer from 'react-test-renderer';
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
        container = shallow(<Header store={store} /> )  
    })

    it('+++ render the Header component', () => {
       expect(container.length).toEqual(1)
    });

});

describe('Header - with actual state',()=>{
	const mountWithContext = (node) => renderer.create(node, {
	    context: {
	      muiTheme: getMuiTheme(),
	    },
	});
    const initialState = {output:10}
    const mockStore = configureStore()
    let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = renderer.create( <Provider store={store}><BrowserRouter><Header /></BrowserRouter></Provider>,
        	{
			    context: { muiTheme: getMuiTheme() },
				getChildContext() {
			  		return {muiTheme: getMuiTheme(baseTheme)};
				}
			}
		).toJSON()
	})


    it('+++ render the connected(SMART) component', () => {
       expect(wrapper).toMatchSnapshot();
    });

});

// Snapshot for Header React Component
describe('Header - with material ui',()=>{
	const initialState = {output:10}
    const mockStore = configureStore()
    let store,wrapper, renderedValue
	beforeEach(() => {
		renderedValue =  renderer.create(<BrowserRouter><MuiThemeProvider><Header/></MuiThemeProvider></BrowserRouter>, {
		  context: { muiTheme },
		getChildContext() {
		  return {muiTheme: getMuiTheme(baseTheme)};
		},
		}).toJSON()
  	});

    it('+++capturing Snapshot of Header', () => {

        expect(renderedValue).toMatchSnapshot();
    });
});