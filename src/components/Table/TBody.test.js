import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import TBody from 'components/Table/TBody';

describe('components > Table > TBody', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<TBody />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
