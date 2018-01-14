import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

const getData = jest.fn();

const defaultProps = {
  getData,
};

describe('App', () => {
  beforeEach(() => {
    getData.mockClear();
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<App {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('calls `this.props.getData` after mount', () => {
    shallow(<App {...defaultProps} />);
    expect(getData).toHaveBeenCalledTimes(1);
  });
});
