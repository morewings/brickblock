import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Nav, NavItem, NavLink} from 'reactstrap';

const TabNavigation = (props) => {
  const createTabClassName = activeTab => classnames({
    active: activeTab === props.activeTab,
  });
  const onClick = tab => () => {
    props.toggleTab(tab);
  };
  return (
    <Nav tabs>
      <NavItem>
        <NavLink
          className={createTabClassName('tab1')}
          onClick={onClick('tab1')}>
          Tab1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={createTabClassName('tab2')}
          onClick={onClick('tab2')}>
          Tab 2
        </NavLink>
      </NavItem>
    </Nav>
  );
};

TabNavigation.propTypes = {
  toggleTab: PropTypes.func.isRequired, // eslint-disable-line
  activeTab: PropTypes.string.isRequired,
};

export default TabNavigation;
