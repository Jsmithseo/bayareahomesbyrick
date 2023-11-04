import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

const MainStyle = {
  overflowX: 'hidden',
};

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  textAlign: 'center',
};

export default function Lessons() {
  return (
    <div style={MainStyle}>
      <Container>
        <Row>
          <Col md="12">
            <center></center>
            <div className="bio-content">
              <div style={copyStyle}>
                form here
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
