import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Pages from 'components/Pages/Pages';


describe('components > Pages > Pages', () => {
  beforeEach(() => {
    // sample.mockClear();
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<Pages />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
