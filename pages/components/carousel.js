import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";

const items = [
  {
    src: "/testimonial1.png",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src:"/testimonial2.png",
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src:"/testimonial3.png",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src:"/testimonials4.png",
    altText: "Slide 4",
    caption: "",
    header: "",
    key: "3",
  },
];

const Example = () => (
<div>
<Row>
    <Col md="5" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
</div>
);

export default Example;