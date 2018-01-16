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
          className={createTabClassName('preIco')}
          onClick={onClick('preIco')}>
          PreICO
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={createTabClassName('ico')}
          onClick={onClick('ico')}>
          ICO
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
