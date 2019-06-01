import React from "react";
import { Jumbotron, Row, Col, Container } from "reactstrap";
import { Logo } from "../shared/logo";
import ActionCards from "./actionsCards"
import { Quotes } from "./quotes";

export function Home(props: any) {
  return (
    <Container>
      <Col>
        <Row>
          <Jumbotron>
            <Logo width={128} height={128} />
            <h1 className="display-3">Langton's Ant Simulator</h1>
            <div className="lead pt-5">
              <Quotes delay={10000} />
            </div>
            <hr className="my-2" />
            <Row className="mt-5">
              <ActionCards />
            </Row>
          </Jumbotron>
        </Row>
      </Col>
    </Container>
  );
}
