import Header from '../shared/Header';
import { Container, Row, Col} from 'reactstrap';

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
            <Col>
              <h2 className="contactTitle">Contact:</h2>
            </Col>

            <Col>
              <p className="contactInfo">
                714 Contra Costa Blvd. Pleasant Hill, CA 94523
              </p>
              <p className="contactInfo">Email: chris@chriscurnuttgolf.com</p>
              <p className="contactInfo">Instagram: @chriscurnuttgolf</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BaseLayout;
