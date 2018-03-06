import React, { Component } from 'react'
import App from '../../src/components/app';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'

describe('App - with mock state', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<App store={store} /> )  
    })

    it('+++ render the App component', () => {
       expect(container.length).toEqual(1)
    });

});
