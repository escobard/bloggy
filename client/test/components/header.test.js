import React, { Component } from 'react'
import Header from '../../src/components/Header';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('Header snapshot', () => {
	const initialState = {output:100}
	const mockStore = configureStore()
	let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Header /> )  
    })

    it('+++ render the Header component', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});