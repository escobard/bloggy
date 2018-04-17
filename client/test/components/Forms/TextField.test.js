import React, { Component } from 'react'
import Fields from '../../src/components/Forms/Fields';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('Fields snapshot', () => {
    const initialState = {output:100}
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<Fields /> )  
    })

    it('+++ render the Fields component', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});