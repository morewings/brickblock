import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Tabs from 'components/Tabs/Tabs';

describe('src > components > Sample.js', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Tabs />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
