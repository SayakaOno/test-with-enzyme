import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../Utils';
import App from './App';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Example title1',
          body: 'Some text'
        },
        {
          title: 'Example title2',
          body: 'Some text'
        },
        {
          title: 'Example title3',
          body: 'Some text'
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  it('Should render without error', () => {
    const component = findByTestAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });

  it('exampleMethod_updateState Method should update state as expected', () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updateState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it('exampleMethod_returnsValue Method should return value as expected', () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsValue(6);
    expect(newValue).toBe(8);
  });
});
