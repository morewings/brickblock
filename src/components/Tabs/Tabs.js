import React, {Fragment} from 'react';
import TabNavigation from 'components/Tabs/TabNavigation';
import TabContent from 'components/Tabs/TabContent';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'tab1',
    };
  }
  toggleTab = (activeTab) => {
    this.setState({activeTab});
  };
  render() {
    return (
      <Fragment>
        <TabNavigation toggleTab={this.toggleTab} activeTab={this.state.activeTab} />
        <TabContent activeTab={this.state.activeTab} />
      </Fragment>
    );
  }
}
