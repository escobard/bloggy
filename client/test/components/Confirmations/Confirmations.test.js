import React, { Component } from 'react'
import ReviewForm from '../../../src/components/Confirmations';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('ReviewForm snapshot', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ReviewForm /> )  
    })

    it('+++ render the ReviewForm component', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});