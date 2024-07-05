import React from 'react';

// import MaterialContactform from './components/MaterialContactform';
import Link from 'next/link';
import { Jumbotron, Container } from 'reactstrap';
import { Row, Col, Button } from 'reactstrap';
import BaseLayout from './components/layouts/BaseLayouts.js';
import 'bootstrap/dist/css/bootstrap.css';

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
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Col sm="12" md="6">
              <div
                dangerouslySetInnerHTML={{
                  __html: `

                    <script charset="UTF-8" type="text/javascript" id="idxwidgetsrc-33746" src="//bayareahomesbyrick.idxbroker.com/idx/quicksearchjs.php?widgetid=33746"></script>       `,
                }}
              />
            </Col>

            <Col sm="12" md="6">
              <div className="rickHeader">
                <img
                  src="/rick2.png" // Replace with your image path
                  alt="Image"
                  className="img-fluid logo header"
                />
                <p className="contactInfo">Rick Crisostomo</p>

                <p className="contactInfo">(707) 853-8610</p>

                <p className="contactInfo"> CalRE #: 01126204</p>
              </div>
            </Col>
          </Row>

          {/* */}

          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
      <Container>
        <Row className="aboutSection">
          <Col xs="12" sm="12" md="6" lg="offset-4" xl="offset-4">
            <Link href="https://bayareahomesbyrick.idxbroker.com/idx/results/listings?csv_listingID=324043751&a_statusCategory%5B%5D=active&a_statusCategory%5B%5D=sold">
              <img
                src="/baker.png" // Replace with your image path
                alt="Image"
                className="img-fluid client"
              />
            </Link>
          </Col>
          <Col xs="12" sm="12" md="6" lg="offset-4">
            <h2 className="aboutTitle">Featured Listing</h2>
            <h3>
              <i>SOLD 7/1/2024</i>
            </h3>
            <p>
              <b>240 Baker St, Benicia, CA 94510</b> Welcome to this charming
              single-family home with a partial view of the straits. If you've
              been looking for a home to fix up, this could be the perfect
              opportunity. Built in 1975, this property features deferred
              maintenance throughout, giving you the chance to add your personal
              touch. The spacious yard offers plenty of room and is in need of
              landscaping, providing a blank canvas for your outdoor vision.
              Single-family home Built in 1975 5,663 sq ft lot $392 per sq ft
              Don't miss out on this potential-filled property!
            </p>
            <Link
              className="aboutlink"
              href="https://bayareahomesbyrick.idxbroker.com/idx/results/listings?csv_listingID=324043751&a_statusCategory%5B%5D=active&a_statusCategory%5B%5D=sold"
            >
              View Listing
            </Link>
          </Col>
        </Row>
        <Row className="aboutSection">
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
              <i>SOLD</i>
            </h3>
            <p>
              <b>4727 Hummingbird Ct in Fairfield, CA 94534</b> presents a remarkable
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
              <Link href="https://bayareahomesbyrick.idxbroker.com/i/vallejo-homes">
                {' '}
                <h3>Vallejo Homes for Sale</h3>
              </Link>
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
              <Link href="https://bayareahomesbyrick.idxbroker.com/i/benicia-homes-for-sale">
                <h3>Benicia Homes for Sale</h3>
              </Link>
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
              <Link href="https://bayareahomesbyrick.idxbroker.com/i/fairfield-homes-for-sale">
                {' '}
                <h3>Fairfield Homes for Sale</h3>
              </Link>
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
              <Link href="https://bayareahomesbyrick.idxbroker.com/i/grass-valley-homes-for-sale">
                {' '}
                <h3>Grass Valley Homes for Sale</h3>
              </Link>
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
              <Link href="https://bayareahomesbyrick.idxbroker.com/i/vacaville-homes-for-sale">
                <h3>Vacaville Homes for Sale</h3>
              </Link>
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
              <Link href="https://bayareahomesbyrick.idxbroker.com/i/cordelia-home-for-sale-">
                {' '}
                <h3>Cordelia Homes for Sale</h3>
              </Link>
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
          <Col xs="12" sm="12" md="6" lg="6">
            <h2 className="lessonTitle">Buyers</h2>
            <div className="mobileView"></div>
            <br />

            <p>
              Looking for the perfect home? Our team of experienced real estate
              agents is here to guide you through every step of the buying
              process. Whether you're a first-time buyer or looking to upgrade,
              we're committed to helping you find the home of your dreams.
            </p>
            <Link href="/Buyers"> Learn More</Link>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6">
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

        <br />
        <br />

        {/* <div
          dangerouslySetInnerHTML={{
            __html: `

                    <script charset="UTF-8" type="text/javascript" id="idxwidgetsrc-33749" src="//bayareahomesbyrick.idxbroker.com/idx/mapwidgetjs.php?widgetid=33749"></script>
      `,
          }}
        /> */}
        <br></br>
      </Container>
    </BaseLayout>
  );
}
