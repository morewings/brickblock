import React, {Fragment} from 'react';
import classnames from 'classnames';
import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';

export default class Tabs extends React.Component { // eslint-disable-line
  toggleTab = (tab) => {
    console.log(tab);
  };
  render() {
    const createTabClassName = activeTab => classnames({
      active: activeTab === 1,
    });
    return (
      <Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={createTabClassName(1)}
              onClick={this.toggleTab}>
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={createTabClassName(2)}
              onClick={this.toggleTab}>
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
      </Fragment>
    );
  }
}
