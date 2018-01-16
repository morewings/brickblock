import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import TRow from 'components/Table/TRow';

describe('components > Table > TRow', () => {
  const defaultProps = {
    address: 'address',
    currency: 'currency',
    value: 9000,
    txid: 'txid',
  };
  it('renders without crashing', () => {
    const wrapper = shallow(<TRow {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
