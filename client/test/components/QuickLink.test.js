import React, { Component } from 'react'
import QuickLink from '../../src/components/QuickLink';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('QuickLink snapshot', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<QuickLink /> )  
    })

    it('+++ render the QuickLink component', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});