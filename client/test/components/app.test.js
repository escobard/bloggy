import React, { Component } from 'react'
import App from '../../src/components/app';
import renderer from 'react-test-renderer';

describe('App', () => {
  describe('snapshots', () => {
    it('renders one variant', () => {
      const tree = renderer.create(
        <App />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders another variant', () => {
      const tree = renderer.create(
        <App />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

test('render a label', () => {
    const wrapper = shallow(
        <App />
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
});