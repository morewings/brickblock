import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import TabContent from 'components/Tabs/TabContent';

describe('components > Tabs > TabContent', () => {
  it('renders without crashing with `props.activeTab === \'tab1\'`', () => {
    const defaultProps = {
      activeTab: 'tab1',
    };
    const wrapper = shallow(<TabContent {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders without crashing with `props.activeTab === \'tab2\'`', () => {
    const defaultProps = {
      activeTab: 'tab2',
    };
    const wrapper = shallow(<TabContent {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
