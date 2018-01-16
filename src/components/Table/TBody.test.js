import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import TBody from 'components/Table/TBody';
import {contributorsMock} from '__mocks__/dataMocks';

describe('components > Table > TBody', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<TBody content={contributorsMock} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
