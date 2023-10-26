import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import GolfLessonForm from '../components/GolfLessonForm';

const MainStyle = {
  overflowX: 'hidden',
};

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  textAlign: 'center',
};

export default function Thankyou() {
  return (
    <div style={MainStyle}>
      <Container>
        <Row>
          <Col md="12">
            <center></center>
            <div className="bio-content">
              <div style={copyStyle}>
                Thanks for reaching out, Ill be in touch soon!
                <GolfLessonForm />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
