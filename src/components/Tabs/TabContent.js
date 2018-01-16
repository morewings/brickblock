import React from 'react';
import PropTypes from 'prop-types';
import {TabContent as Content, TabPane} from 'reactstrap';
import Table from 'components/Table/Table.container';
import Pages from 'components/Pages/Pages.container';

const TabContent = props => (
  <Content activeTab={props.activeTab}>
    <TabPane tabId="preIco">
      <Table dataSource="preIco" />
      <Pages dataSource="preIco" />
    </TabPane>
    <TabPane tabId="ico">
      <Table dataSource="ico" />
      <Pages dataSource="ico" />
    </TabPane>
  </Content>
);

TabContent.propTypes = {
  activeTab: PropTypes.string.isRequired,
};

export default TabContent;
