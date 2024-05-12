import React from 'react';

// import MaterialContactform from './components/MaterialContactform';
import Link from 'next/link';
import { Jumbotron, Container } from 'reactstrap';

import { Row, Col, Button } from 'reactstrap';
import BaseLayout from './components/layouts/BaseLayouts.js';

const items = [
  {
    src: '/testimonial1.png',
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1',
  },
  {
    src: '/testimonial2.png',
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2',
  },
  {
    src: '/testimonial3.png',
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3',
  },
  {
    src: '/testimonials4.png',
    altText: 'Slide 4',
    caption: '',
    header: '',
    key: '3',
  },
];

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
      <div id="idxStart"></div>
      <div id="idxStop"></div>
      <div className="jumbtron">
        <div className="container">
          <center>
            <h1 className="display-3">Bay Area Home By Rick</h1>
            <Button>
              <Link href="https://bayareahomesbyrick.idxbroker.com/idx/search/advanced">
                Search Homes For Sale
              </Link>
            </Button>
            <br></br>
            <br></br>
            <br></br>

            <h2>This site is currently under construction.</h2>
          </center>
        </div>
      </div>
      <Container>
        <Row className="aboutSection">
          <h2 className="aboutTitleMobile">About Rick</h2>
          <Col xs="12" sm="12" md="6" lg="offset-4" xl="offset-4">
            <Link href="https://bayareahomesbyrick.idxbroker.com/i/4727-hummingbird-ct-fairfield">
              <img
                src="/featured_listing.jpg" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              />
            </Link>
          </Col>
          <Col xs="12" sm="12" md="6" lg="offset-4">
            <h2 className="aboutTitle">Featured Listing</h2>
            <h3>
              4727 Hummingbird Ct Fairfield, CA 94534 <br></br>
            </h3>
            <p>
              4727 Hummingbird Ct in Fairfield, CA 94534 presents a remarkable
              opportunity to experience the quintessential Fairfield lifestyle.
              This spacious and meticulously crafted home boasts 5 bedrooms, 3
              baths, and a thoughtfully designed 2763 sqft floorplan, offering
              both elegance and comfort. Built in 2002, the home exudes a
              timeless charm, evident in its well-appointed features and
              contemporary layout.
            </p>
            <p>
              As you step inside, you are greeted by expansive living areas that
              seamlessly flow from one space to the next, creating an inviting
              atmosphere for gatherings and relaxation alike. The gourmet
              kitchen is a focal point, equipped with high-end appliances, ample
              counter space, and stylish cabinetry, catering to the needs of the
              modern homeowner.
            </p>
            <Link
              className="aboutlink"
              href="https://bayareahomesbyrick.idxbroker.com/i/4727-hummingbird-ct-fairfield"
            >
              View Listing
            </Link>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <h2>Featured Areas</h2>
        </center>
        <br></br>
        <br></br>
        <Row>
          <Col xs="12" sm="4">
            <center>
              <h3>Vallejo Homes for Sale</h3>
            </center>
            <Link href="https://bayareahomesbyrick.idxbroker.com/i/vallejo-homes">
              <img
                src="/vallejohomeTile.png" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              />
            </Link>
          </Col>
          <Col xs="12" sm="4">
            <center>
              <h3>Benicia Homes for Sale</h3>
            </center>
            <Link href="https://bayareahomesbyrick.idxbroker.com/i/benicia-homes-for-sale">
              <img
                src="/beniciahomeTile.png" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              />
            </Link>
          </Col>
          <Col xs="12" sm="4">
            <center>
              <h3>Fairfield Homes for Sale</h3>
            </center>
            <Link href="https://bayareahomesbyrick.idxbroker.com/i/fairfield-homes-for-sale">
              <img
                src="/fairfieldhomeTile.png" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              />
            </Link>
          </Col>
        </Row>

        <br></br>
        <br></br>
        <Row>
          <Col xs="12" sm="4">
            <center>
              <h3>Grass Valley Homes for Sale</h3>
            </center>
            <Link href="https://bayareahomesbyrick.idxbroker.com/i/grass-valley-homes-for-sale">
              <img
                src="/grassvalleyTile.png" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              />
            </Link>
          </Col>
          <Col xs="12" sm="4">
            <center>
              <h3>Vacaville Homes for Sale</h3>
            </center>
            <Link href="https://bayareahomesbyrick.idxbroker.com/i/vacaville-homes-for-sale">
              <img
                src="/vacavillehomeTile.png" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              />
            </Link>
          </Col>

          <Col xs="12" sm="4">
            <center>
              <h3>Cordelia Homes for Sale</h3>
            </center>
            <Link href="https://bayareahomesbyrick.idxbroker.com/i/cordelia-home-for-sale-">
              <img
                src="/cordeliahomeTile.png" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              />
            </Link>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row className="lessonSection">
          <Col xs="6" sm="6" md="6" lg="6">
            <h2 className="lessonTitle">Buyers</h2>
            <div className="mobileView">
              <img
                src="/lesson3.png" // Replace with your image path
                alt="Image"
                className="img-fluid lesson"
              />
            </div>
            <br />

            <p>
              Looking for the perfect home? Our team of experienced real estate
              agents is here to guide you through every step of the buying
              process. Whether you're a first-time buyer or looking to upgrade,
              we're committed to helping you find the home of your dreams.
            </p>
            <Link href="/Buyers"> Learn More</Link>
          </Col>
          <Col xs="6" sm="6" md="6" lg="6">
            <h2 className="lessonTitle">Sellers</h2>
            <p>
              Thinking of selling your home? Our team of dedicated real estate
              professionals is here to help you navigate the selling process
              with ease. From listing your property to closing the deal, we're
              committed to getting you the best price for your home.
            </p>
            <Link href="/Sellers"> Learn More</Link>
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
        <br />
        <br />
        {/* <Row className="statSection">
          <div className="jumbtron putting">
            <div className="container">
              <h1 className="display-3"></h1>
            </div>
          </div>
        </Row> */}
      </Container>
      <div className="ratings">
        {/* <Container>
          <Row>
            <Col lg="3" md="3" sm="12" xs="12">
              <h3 className="stat">3,256 lessons since 2020</h3>
            </Col>
            <Col lg="3" md="3" sm="12" xs="12">
              <h3 className="stat">8K+ lessons career</h3>
            </Col>
            <Col lg="3" md="3" sm="12" xs="12">
              <h3 className="stat">650+ golfers helped</h3>
            </Col>
            <Col lg="3" md="3" sm="12" xs="12">
              <h3 className="stat">95% goals reached</h3>
            </Col>
          </Row>
        </Container> */}
      </div>
      <Row className="carouselbackground">
        {/* <center>
          <UncontrolledCarousel items={items} interval={5000} />
        </center> */}
      </Row>
    </BaseLayout>
  );
}
