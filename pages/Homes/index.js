import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayouts';

import Link from 'next/link';

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
    <BaseLayout>
      <div className="jumbtron">
        <div className="container">
          <center>
            {/* <img
              src="/logo.png" // Replace with your image path
              alt="Image"
              className="img-fluid logo"
            /> */}

            <Link href="https://bayareahomesbyrick.idxbroker.com/idx/search/advanced">
              <h1 className="display-3">Search MLS</h1>
            </Link>
          </center>
        </div>
      </div>
      <div style={MainStyle}>
        <Container>
          {/* <Row>
            <Col md="12">
              <br></br>
              <br></br>
              <HubSpotForm id="hubspotForm" />
              <br></br>
              <br></br>
            </Col>
          </Row> */}
          Here we will have a MLS listings
        </Container>
      </div>
    </BaseLayout>
  );
}
