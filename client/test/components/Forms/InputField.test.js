import React, { Component } from 'react'
import InputField from '../../src/components/Forms/Fields/InputField';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('InputField snapshot', () => {
    const initialState = {output:100}
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<InputField /> )  
    })

    it('+++ render the InputField component', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});