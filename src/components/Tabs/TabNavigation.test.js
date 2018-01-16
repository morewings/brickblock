import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import config from 'config';
import TabNavigation from 'components/Tabs/TabNavigation';
import {NavLink} from 'reactstrap';

const toggleTab = jest.fn();

const defaultProps = {
  toggleTab,
  activeTab: config.defaultTab,
};

describe('components > Tabs > TabNavigation', () => {
  beforeEach(() => {
    toggleTab.mockClear();
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<TabNavigation {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('calls `props.toggleTab` on tab link click with `tabId` as an argument', () => {
    const wrapper = shallow(<TabNavigation {...defaultProps} />);
    const tabIds = [config.defaultTab, 'ico'];
    const nav1 = wrapper.find(NavLink).first();
    const nav2 = wrapper.find(NavLink).last();
    nav1.simulate('click');
    expect(toggleTab).toHaveBeenCalledTimes(1);
    expect(toggleTab).toHaveBeenCalledWith(tabIds[0]);
    nav2.simulate('click');
    expect(toggleTab).toHaveBeenCalledTimes(2);
    expect(toggleTab).toHaveBeenCalledWith(tabIds[1]);
  });
});
