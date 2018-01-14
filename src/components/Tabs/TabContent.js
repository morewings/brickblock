import React from 'react';
import PropTypes from 'prop-types';
import {TabContent as Content, TabPane} from 'reactstrap';

const TabContent = props => (
  <Content activeTab={props.activeTab}>
    <TabPane tabId="tab1">
        Tab 1
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
