import React from "react";
import { Container, CardDeck } from "reactstrap";
import AntBar from "../shared/antBar";
import ResourceCard from './resourceCard';

export class Resources extends React.Component<any, any> {
  render() {
    return (
      <Container>
        <AntBar title="Resources" />
        <CardDeck className="mt-5">
          <ResourceCard
            header="Wikipedia"
            title="Langton's ant"
            link="https://en.wikipedia.org/wiki/Langton's_ant"
            text="Langton's ant is a two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior. It was invented by Chris Langton in 1986..."
          />

          <ResourceCard
            header="Chris Langton"
            title="Studying artificial life with cellular automata"
            link={process.env.PUBLIC_URL + '/pdf/langton.pdf'}
            text="Biochemistry studies the way in which life emerges from the interaction of inanimate molecules. In this paper we look into the possibility that life could emerge from the interaction of inanimate artificial molecules..."
          />

          <ResourceCard
            header="Andrés Moreira"
            title="Complexity of Langton’s ant"
            link="http://www.dim.uchile.cl/~anmoreir/oficial/langton_dam.pdf"
            text="The virtual ant introduced by Langton has an interesting behavior, which has been studied in several contexts. Here we give a construction to calculate anyboolean circuit with the trajectory of a single ant..."
          />
        </CardDeck>
      </Container>);
  }
}
