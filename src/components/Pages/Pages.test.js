import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import config from 'config';
import Pages from 'components/Pages/Pages';
import {PaginationItem, PaginationLink} from 'reactstrap';

const setCurrentPage = jest.fn();

const defaultProps = {
  dataLength: 300,
  currentPage: 1,
  setCurrentPage,
  dataSource: 'dataSource',
};
const pageItemCssSelector = '.page-item';
const activeClass = 'active';
const disabledClass = 'disabled';


describe('components > Pages > Pages', () => {
  beforeEach(() => {
    setCurrentPage.mockClear();
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<Pages {...defaultProps} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('calls `props.onClick` when pagination item is clicked', () => {
    const wrapper = shallow(<Pages {...defaultProps} />);
    const pageNumber = 1;
    const pageLink = wrapper.find(PaginationLink).at(1);
    pageLink.simulate('click', { preventDefault() {} });
    expect(setCurrentPage).toHaveBeenCalledTimes(1);
    expect(setCurrentPage).toHaveBeenCalledWith(pageNumber, defaultProps.dataSource);
  });
  it('contains proper amount of page links', () => {
    const wrapper = shallow(<Pages {...defaultProps} />);
    const pageLink = wrapper.find(PaginationItem);
    const expectedAmount = Math.ceil(defaultProps.dataLength / config.itemsPerPage) + 2;
    expect(pageLink.length).toBe(expectedAmount);
  });
  it(`renders previous link with '${disabledClass}' class at first page`, () => {
    const wrapper = mount(<Pages {...defaultProps} />);
    expect(wrapper.find(pageItemCssSelector).first().hasClass(disabledClass)).toBe(true);
  });
  it(`renders next link with '${disabledClass}' class at last page`, () => {
    const wrapper = mount(<Pages {...defaultProps} />);
    wrapper.setProps({
      currentPage: Math.ceil(defaultProps.dataLength / config.itemsPerPage),
    });
    expect(wrapper.find(pageItemCssSelector).last().hasClass(disabledClass)).toBe(true);
  });
  it('higlights current page as active', () => {
    const wrapper = mount(<Pages {...defaultProps} />);
    const currentPage = 2;
    wrapper.setProps({
      currentPage,
    });
    expect(wrapper.find(pageItemCssSelector).at(currentPage).hasClass(activeClass)).toBe(true);
  });
});
