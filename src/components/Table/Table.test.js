import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Table from 'components/Table/Table';
import {contributorsMock} from '__mocks__/dataMocks';

describe('components > Table > Table', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Table content={contributorsMock} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
