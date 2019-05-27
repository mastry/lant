import React from "react";
import { Row, Col, Navbar, NavbarBrand, Container, Button, Card, CardDeck, CardTitle, CardHeader, CardBody, CardText, CardLink, CardFooter } from "reactstrap";
import AntBar from "../shared/antBar";

export class Resources extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <AntBar title="Resources" />
        <CardDeck className="mt-5">
          <Card>
            <CardHeader>Wikipedia</CardHeader>
            <CardBody>
              <CardTitle className="font-weight-bold">Langton's ant</CardTitle>
              <CardText>
                Langton's ant is a two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior. It was invented by Chris Langton in 1986...
              </CardText>
            </CardBody>
            <CardFooter>
              <CardLink href="https://en.wikipedia.org/wiki/Langton's_ant">Open</CardLink>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>Chris Langton</CardHeader>
            <CardBody>
              <CardTitle className="font-weight-bold">
                Studying artificial life with cellular automata

              </CardTitle>
              <CardText>
                Biochemistry studies the way in which life emerges from the interaction of inanimate molecules. In this paper we look into the possibility that life could emerge from the interaction of inanimate artificial molecules...
              </CardText>
            </CardBody>
            <CardFooter>
              <CardLink href={process.env.PUBLIC_URL + '/pdf/langton.pdf'}>Open</CardLink>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>Andrés Moreira</CardHeader>
            <CardBody>
              <CardTitle className="font-weight-bold">
                Complexity of Langton’s ant

              </CardTitle>
              <CardText>
                The virtual ant introduced by Langton [Physica D 22 (1986) 120] has an interesting behav-ior, which has been studied in several contexts. Here we give a construction to calculate anyboolean circuit with the trajectory of a single ant...
              </CardText>
            </CardBody>
            <CardFooter>
              <CardLink href="http://www.dim.uchile.cl/~anmoreir/oficial/langton_dam.pdf">Open</CardLink>
            </CardFooter>
          </Card>


        </CardDeck>
      </Container>);
  }
}
