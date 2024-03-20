import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import BaseLayout from '../components/layouts/BaseLayouts';
import Carousel from '../components/carousel';


const MainStyle = {
  overflowX: 'hidden',
};

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  textAlign: 'center',
};

export default function About() {
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
            <h1 className="display-3">About Rick</h1>
          </center>
        </div>
      </div>
      <div className="container about">
        <Row>
          <Col md="6">
            {/* <img
              src="/headshot.png" // Replace with your image path
              alt="Image"
              className="img-fluid"
            /> */}
          </Col>
          <Col md="6">
            <div className="bio-content">
              <p>
                Rick Crisostomo is a dedicated real estate professional known
                for his deep commitment to the Vallejo and Benicia communities.
                With a keen eye for detail and a passion for helping others find
                their perfect home, Rick has established himself as a trusted
                name in the local real estate market. Born and raised in the
                area, Rick has an intimate understanding of Vallejo and
                Benicia's unique charm, character, and potential. His insider
                knowledge of the neighborhoods, schools, and local amenities
                makes him an invaluable guide for anyone looking to buy or sell
                property in these vibrant communities. Rick's approach to real
                estate is centered around building lasting relationships and
                providing personalized service to each of his clients. Whether
                you're a first-time homebuyer, looking to sell your property, or
                searching for your dream home, Rick is dedicated to listening to
                your needs, understanding your aspirations, and working
                tirelessly to make your real estate goals a reality. With a
                background in marketing and a natural flair for negotiation,
                Rick leverages his skills to ensure his clients get the best
                possible deals. His commitment to excellence, integrity, and
                transparency has earned him a reputation as a real estate agent
                who consistently goes above and beyond for his clients. When
                Rick is not busy helping his clients navigate the complexities
                of the real estate market, he enjoys giving back to his
                community, exploring the natural beauty of the Vallejo and
                Benicia area, and spending quality time with his family and
                friends. Choosing Rick Crisostomo as your real estate agent
                means partnering with a professional who is genuinely invested
                in your success and well-being. Let Rick guide you through your
                real estate journey with confidence, expertise, and a personal
                touch that makes all the difference.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div>
      </div>
    </BaseLayout>
  );
}
