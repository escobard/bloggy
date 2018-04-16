import React, { Component } from 'react'
import Common from '../../src/components/Common';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('Common snapshot', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Common /> )  
    })

    it('+++ render the Common components', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});