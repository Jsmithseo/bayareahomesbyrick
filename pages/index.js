import React from 'react';
import Image from 'next/image';

import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// import MaterialContactform from './components/MaterialContactform';
import Link from 'next/link';
import { Jumbotron, Container } from 'reactstrap';

import { Row, Col, Button } from 'reactstrap';
import BaseLayout from './components/layouts/BaseLayouts.js';

export default function Index() {
  const MainStyle = {
    overflowX: 'hidden',
  };

  const companyTitle = {
    textAlign: 'center',
    fontFamily: 'avenir',
  };

  const copy = {
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'avenir',
  };
  return (
    <BaseLayout>
      <div className="jumbtron">
        <div className="container">
          <h1 className="display-3">Paving the Way to Golf Excellence</h1>
        </div>
      </div>
      <Container>
        <Row className="aboutSection">
          <Col sm="6">
            <img
              src="/image6.jpeg" // Replace with your image path
              alt="Image"
              className="img-fluid"
            />
          </Col>
          <Col sm="6">
            <h2 className="aboutTitle">About Me</h2>
            <p>
              Chris Curnutt is originally from Oklahoma and began his golf
              journey at 5 years old in a suburb of Tulsa. He grew up playing
              multiple sports, including soccer and baseball, but decided at the
              age of 15 to focus on golf. In high school, Chris was a member of
              his High School team which amassed over 25 wins, including 3
              consecutive Oklahoma State Championships. After attending the
              University of Arkansas with a major in Education, Chris began his
              career in golf at Shadow Valley CC in Bentonville, AR. Here, he
              was involved in the instruction program as well as day to day
              operations. He continued his career at Emerald Falls GC in Broken
              Arrow, OK, as an Assistant Professional. After moving to the
              Oklahoma City area, Chris instructed on a part time basis while
              pursuing a career in restaurant management. 10 years later, Chris
              and his girlfriend Samantha moved to Northern California and the
              decision was made that he would return to teaching full time.
            </p>
          </Col>
        </Row>
        <br></br>
        <Row className="lessonSection">
          <Col sm="6">
            <img
              src="/lesson.jpeg" // Replace with your image path
              alt="Image"
              className="img-fluid"
            />
          </Col>
          <Col sm="6">
            <h2 className="lessonTitle">LESSONS</h2>
            <p>
              My goal is to not just show you what to do or how to hit a ball,
              but also educate you on the game so you enjoy playing golf
              everytime you are on the course.
            </p>
            <h3>CREATING THE ROADMAP</h3>
            <p>
              All lessons start with a 60 minute swing assessment ($150). Swing
              assessments are included in lesson packages of 10 and more. This
              first step will help both you and I create your personalized
              lesson program. During the assessment, we will discuss your golf
              goals, diagnose both ball flight and golf swing, and structure the
              lesson plan for each visit.{' '}
            </p>
            <h3>SERVICES AND PACKAGES</h3>
            <p>
              The services and packages offered are designed to help you reach
              your potential to play your best golf based on what you are
              looking to achieve. Lessons start at $210, with various packages
              available depending on your goals. Each lesson is 60 minutes and
              for junior golfers (under 17) there is a 30% discount on full
              packages.{' '}
            </p>
            <h3>LET'S GET SOMETHING ON THE BOOKS</h3>
            <p>
              Please click on the button below and we can begin the process to
              schedule you lessons. Once your lessons have been confirmed, you
              will receive a pre-assessment form to fill out. This will prepare
              us for the swing assessment and help guide your lesson program. If
              you have any additional questions, please email me at{' '}
            </p>
            <Button color="primary">Book a Lesson</Button>
          </Col>
        </Row>
        {/* <Row className="studentSection">
          <Col sm="6">
            <img
            src="/lesson.jpeg" // Replace with your image path
            alt="Image"
            className="img-fluid"
          />
          </Col>
          <Col sm="6">
            <h3 className="studentTitle">Students</h3>
          </Col>
        </Row> */}
        <Row className="statSection">
          <div className="jumbtron putting">
            <div className="container">
              <h1 className="display-3"></h1>
            </div>
          </div>
        </Row>
      </Container>
      <div className="ratings">
        <Container>
          <Row>
            <Col sm="3">
              <h3 className="stat">3,256 lessons since 2020</h3>
            </Col>
            <Col sm="3">
              <h3 className="stat">8K+ lessons career</h3>
            </Col>
            <Col sm="3">
              <h3 className="stat">650+ golfers helped</h3>
            </Col>
            <Col sm="3">
              <h3 className="stat">95% goals reached</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <Container>
          <Row>
            <Col>
            <h2 className="contactTitle">
            Contact:
            </h2>
            </Col>
         
        <Col>
          <p className="contactInfo">714 Contra Costa Blvd. Pleasant Hill, CA 94523</p>
            <p className="contactInfo">Email: chris.curnutt59@gmail.com</p>
            <p className="contactInfo">Instagram: @chriscurnuttgolf</p>
        </Col>
           
            </Row>
        </Container>
      </div>

    </BaseLayout>
  );
}
