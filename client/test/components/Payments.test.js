import React, { Component } from 'react'
import Payments from '../../src/components/Payments';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('Payments snapshot', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Payments /> )  
    })

    it('+++ render the Payments component', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});