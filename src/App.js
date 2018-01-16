import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Tabs from 'components/Tabs/Tabs';
import './App.css';

export default class App extends React.Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="12">
              <div className="contributors">
                <Tabs />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  getData: PropTypes.func.isRequired,
};
