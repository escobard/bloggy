import React, { Component } from 'react'
import { AddButton } from '../../../src/components/Common';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('AddButton snapshot', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<AddButton /> )  
    })

    it('+++ render the AddButton components', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});