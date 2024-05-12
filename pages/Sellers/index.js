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

            <h1 className="display-3">Sellers</h1>
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
                  <b>Market Knowledge: </b> With my in-depth knowledge of the local market, I can help you price your home competitively to attract potential buyers.{' '}
                </li>
                <li>
                  <b>Marketing Expertise:</b>I use a variety of marketing strategies to showcase your property to a wide audience, including online listings, social media, and traditional marketing methods.
                </li>
                <li>
                  <b>Staging and Photography:</b>Presentation is key. I offer staging and professional photography services to make your home look its best and stand out to buyers.
                </li>
                <li>
                  <b>Negotiation Skills:</b> I am a skilled negotiators who will work tirelessly to get you the best price for your home.
                </li>
                <br></br>
                <br></br>
                <center>
                  <h2>My Services</h2>
                </center>
                <br></br>
                <br></br>
                <li>
                  <b>Property Valuation:</b> Receive a complimentary property valuation to determine the market value of your home.
                </li>
                <li>
                  <b>Marketing Plan:</b> We'll create a customized marketing plan tailored to your property to attract the right buyers.
                </li>
                <li>
                  <b>Contract Negotiation: </b>  Schedule open houses and private showings to showcase your home to potential buyers.
                </li>
                <li>
                  <b>Open Houses and Showings:</b> Schedule open houses and private showings to showcase your home to potential buyers.
                </li>
              </div>
              <br></br>
              <br></br>
              <div>
                <h3>List Your Home with Me</h3>
                <p>
                Ready to sell your home? List your property with us and let our team handle the rest. We're dedicated to helping you sell your home quickly and for the best price possible. Contact us today to get started!
                  <Link href="/">Contact Me</Link>
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
