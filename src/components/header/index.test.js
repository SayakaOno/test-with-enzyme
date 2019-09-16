import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../Utils';
import Header from './index';

const setUp = (props = {}) => {
  const component = shallow(<Header />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = findByTestAttr(component, 'logo');
    expect(logo.length).toBe(1);
  });
});
