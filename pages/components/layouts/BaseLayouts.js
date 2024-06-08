import Header from '../shared/Header';
import { Container, Row, Col } from 'reactstrap';

const BaseLayout = (props) => {
  const { className, user, loading, children } = props;
  return (
    <div className="layout-container">
      <Header user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
      <div className="MainFooter">
        <Container>
          <Row>
            <Col sm="12" xs="12" md="4" lg="4">
              <h1 className="contactTitle">Contact:</h1>
              <div className="rickPhotoFooter">
                <img
                  src="/rick2.png" // Replace with your image path
                  alt="Image"
                  className="img-fluid logo"
                />
              </div>
            </Col>

            <Col sm="12" xs="12" md="4" lg="4">
              <p className="contactInfo">
                Real Estate Salesperson Coldwell Banker Solano Pacific CalRE #:
                01126204
              </p>
              <p className="contactInfo">Mobile: (707) 853-8610</p>
              <p className="contactInfo">
                federick.crisostomo@solanopacific.com
              </p>
              <p className="contactInfo"> CalRE #: 01126204</p>
            </Col>
            <Col sm="12" xs="12" md="4" lg="4">
              <img
                src="/coldwell_banker_logo.png" // Replace with your image path
                alt="Image"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BaseLayout;
