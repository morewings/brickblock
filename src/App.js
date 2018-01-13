import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Tabs from 'components/Tabs/Tabs';

const App = props => (
  <div className="App">
    <Container>
      <Row>
        <Col xs="12">
          <Tabs />
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
