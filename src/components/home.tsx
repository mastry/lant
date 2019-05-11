import React from "react";
import {
  Card,
  Row,
  Col,
  CardText,
  CardHeader,
  CardLink,
  Container,
  CardBody
} from "reactstrap";
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
