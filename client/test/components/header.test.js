import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "../../src/components/Header";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

// this is the proper way to render the connected components with jest!
describe("Header snapshot", () => {
    const initialState = { output: 100 };
    const mockStore = configureStore();
    let store, container;

    beforeEach(() => {
        store = mockStore(initialState);
        container = shallow(<Header store={store} props />).dive();
    });

    it("+++ render the Header component", () => {
        expect(toJson(container)).toMatchSnapshot();
    });
});
