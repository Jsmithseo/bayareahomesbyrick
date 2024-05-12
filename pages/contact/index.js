import React, { useState } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayouts';
import Head from 'next/head';

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  textAlign: 'center',
};

export default function Contact() {
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

            <h1 className="display-3">Contact</h1>
          </center>
        </div>
      </div>
      <div>
        <Container>
          <Row>
            <Col md="12">
              <div>
                <br></br>
                <br></br>
                <center>
                  <h2>
                    Unlock the full potential of our platform by creating your
                    account. Gain access to exclusive features, personalized
                    property recommendations, and the ability to save your
                    favorite listings.
                  </h2>
                </center>
                <br></br>
                <br></br>
                <br></br>

                <div>
                  <h2>Why sign up?</h2>
                </div>
                <div>
                  <li>
                    <b>Save Your Searches:</b>Save time by saving your favorite
                    searches and getting notified when new properties matching
                    your criteria are added.
                  </li>
                  <li>
                    <b>Personalized Recommendations:</b> Receive personalized
                    property recommendations based on your preferences and
                    browsing history.
                  </li>
                  <li>
                    {' '}
                    <b>Favorite Listings:</b> Keep track of your favorite
                    listings and easily access them anytime, anywhere.
                  </li>
                  <li>
                    {' '}
                    <b>Advanced Search Options:</b> Use our advanced search
                    filters to narrow down your search and find the perfect
                    property.
                  </li>
                  <li>
                    <b>Stay Updated:</b> Stay informed about market trends, new
                    listings, and price changes in your area of interest.
                  </li>
                </div>
              </div>
              <br></br>
              <br></br>
              <center>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `

        <script src="//bayareahomesbyrick.idxbroker.com/idx/leadsignupwidget.php?widgetid=33747"></script>
      `,
                  }}
                />
              </center>
              <br></br>
              <br></br>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
}
