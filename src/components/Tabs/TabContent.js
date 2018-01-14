import React from 'react';
import PropTypes from 'prop-types';
import {TabContent as Content, TabPane} from 'reactstrap';
import Table from 'components/Table/Table';
import Pages from 'components/Pages/Pages.container';

const TabContent = props => (
  <Content activeTab={props.activeTab}>
    <TabPane tabId="tab1">
      <Table />
      <Pages dataSource="preIco" />
    </TabPane>
    <TabPane tabId="tab2">
        Tab 2
    </TabPane>
  </Content>
);

TabContent.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default TabContent;
