import React, { useState } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayouts';
import Head from 'next/head';
import Link from 'next/link';

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  textAlign: 'center',
};

export default function Buyers() {
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

            <h1 className="display-3">Buyers</h1>
          </center>
        </div>
      </div>
      <div>
        <Container>
          <Row>
            <Col md="12">
              <br></br>
              <br></br>
              <br></br>
              <div>
                <center>
                  <h2>Why Choose Me?</h2>
                </center>
                <br></br>
                <br></br>
                <li>
                  <b>Local Expertise:</b> Our agents have in-depth knowledge of
                  the local market and can help you find the right neighborhood
                  and property that meets your needs.{' '}
                </li>
                <li>
                  <b>Personalized Service:</b> We understand that buying a home
                  is a significant investment. That's why we provide
                  personalized service to ensure your home buying experience is
                  smooth and stress-free.
                </li>
                <li>
                  <b>Access to Listings:</b>Gain access to exclusive listings
                  and off-market properties that match your criteria.
                </li>
                <li>
                  <b>Negotiation Skills:</b>Our agents are skilled negotiators
                  who will work tirelessly to get you the best deal possible.
                </li>
                <br></br>
                <br></br>
                <center>
                  <h2>Our Services</h2>
                </center>
                <br></br>
                <br></br>
                <li>
                  <b>Property Search:</b>Use our advanced search tools to find
                  properties that meet your specific criteria, including price
                  range, location, and features.
                </li>
                <li>
                  <b>Market Analysis</b>Receive a comprehensive market analysis
                  to help you make informed decisions about your purchase.{' '}
                </li>
                <li>
                  <b>Home Tours:</b> Schedule private home tours to view
                  properties in person and get a feel for the neighborhood.
                </li>
                <li>
                  <b>Contract Assistance: </b>We'll guide you through the
                  contract process and ensure all documents are in order for a
                  smooth transaction.
                </li>
              </div>
              <br></br>
              <br></br>
              <div>
                <h3>Start Your Search Today!</h3>
                <p>
                  Ready to find your dream home? Get started by browsing our
                  current listings or contact us to speak with one of our
                  agents. Your dream home is just a click away!{' '}
                  <Link href="/">View Homes</Link>
                </p>
              </div>
              <br></br>
              <br></br>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
}
