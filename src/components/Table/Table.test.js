import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Table from 'components/Table/Table';

describe('components > Table > Table', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Table />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
