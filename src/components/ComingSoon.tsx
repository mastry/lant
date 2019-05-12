import React from "react";
import { Row, Col, Container } from "reactstrap";

function ComingSoon() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <div className="m-10">
            <img
              src="images/ant.svg"
              alt="Ant by FELIX FX from the Noun Project"
            />
          </div>
          <div>Coming Soon-ish</div>
        </Col>
      </Row>
    </Container>
  );
}

export default ComingSoon;
