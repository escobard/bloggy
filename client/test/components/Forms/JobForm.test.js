import React, { Component } from 'react'
import JobForm from '../../../src/components/Forms/JobForm';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

describe('JobForm snapshot', () => {
    const initialState = {output:100}
    const mockStore = configureStore()
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<JobForm /> )  
    })

    it('+++ render the JobForm component', () => {
       expect(toJson(container)).toMatchSnapshot()
    });

});