import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Banner } from "./banner";

export function Home(props: any) {
  return (
    <Container>
      <Col>
        <Row>
          <Banner />
        </Row>
      </Col>
    </Container>
  );
}
