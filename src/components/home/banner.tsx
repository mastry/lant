import React from "react";
import { Logo } from "../shared/logo";

import {
  Jumbotron,
  Row,
  Col,
  Card,
  CardText,
  CardLink,
  CardBody,
  CardDeck,
  CardHeader
} from "reactstrap";
import { Quotes } from "./quotes";

export function Banner(props: any) {
  return (
    <Jumbotron>
      <Logo width={128} height={128} />
      <h1 className="display-3">Langton's Ant Simulator</h1>
      <div className="lead pt-5">
        <Quotes delay={10000} />
      </div>
      <hr className="my-2" />
      <Row className="mt-5">
        <CardDeck>
          <Card>
            <CardHeader>Learn</CardHeader>
            <CardBody className="bg-light">
              <CardText>
                Learn more about Lanton's Ant with these resources.
              </CardText>
              <CardLink href="/resources">View Resources</CardLink>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>Play</CardHeader>
            <CardBody className="bg-light">
              <CardText>
                Start the ant simulator and generate your own masterpiece.
              </CardText>
              <CardLink href="/simulator">Run Simulator</CardLink>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>Gawk</CardHeader>
            <CardBody className="bg-light">
              <CardText>See what others have created in the gallery.</CardText>
              <CardLink href="/gallery">Open Gallery</CardLink>
            </CardBody>
          </Card>
        </CardDeck>
      </Row>
    </Jumbotron>
  );
}
