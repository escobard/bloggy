import React, { Component } from 'react'
import Footer from '../../src/components/Footer';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('Footer snapshot', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Footer /> )  
    })

    it('+++ render the Footer component', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});