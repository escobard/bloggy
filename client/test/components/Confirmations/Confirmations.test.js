import React, { Component } from 'react'
import JobReview from '../../../src/components/Confirmations';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('JobReview snapshot', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<JobReview /> )  
    })

    it('+++ render the JobReview component', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});