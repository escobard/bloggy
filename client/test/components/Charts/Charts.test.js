import React, { Component } from 'react'
import Charts from '../../../src/components/Charts';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('Charts snapshot', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Charts /> )  
    })

    it('+++ render the Charts components', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});