import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Logo } from "./logo";

function ComingSoon() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <div className="m-10">
            <Logo width={512} height={512} />
          </div>
          <div>Coming Soon-ish</div>
        </Col>
      </Row>
    </Container>
  );
}

export default ComingSoon;
