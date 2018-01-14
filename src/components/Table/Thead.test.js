import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import THead from 'components/Table/THead';

describe('components > Table > THead', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<THead />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
