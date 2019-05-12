import React from "react";
import { Fade } from "reactstrap";

export interface IQuoteProps {
  delay: number;
}

export class Quotes extends React.Component<IQuoteProps, any> {
  private timerID: number;

  constructor(props: IQuoteProps) {
    super(props);
    this.state = { quote: 0, quoteIsVisible: true };
    this.timerID = 0;
  }

  componentDidMount() {
    this.timerID = window.setTimeout(() => this.nextQuote(), this.props.delay);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timerID);
  }

  async sleep(ms: number) {
    await new Promise(resolve => (this.timerID = setTimeout(resolve, ms)));
  }

  nextQuote = async () => {
    // Hide the current quote
    this.setState({
      quoteIsVisible: false
    });

    // Show the next quote in 250ms
    await this.sleep(250);
    this.setState({
      quote: this.state.quote + 1,
      quoteIsVisible: true
    });

    // Schedule the next quote change
    this.timerID = window.setTimeout(() => this.nextQuote(), this.props.delay);
  };

  private quotes = [
    "Since the brain is obviously a highly parallel aggregate system, it is entirely possible that the dynamics of this massive neural-net involves the interactions of virtual automata...",
    "It is convenient to think of a cellular automaton as a logical universe all of its own, with its own local physics: the transition function \u03B8.",
    "... and thus that the existence of artificial life within cellular automata is a distinct possibility.",
    "Cellular automata provide us with the logical universes within which we can embed artificial molecules in the form of propagating, virtual automata.",
    "An initial set of operators and operands goes to work producing more operators and operands, which immediately enter into the ongoing logical 'fray'.",
    "The study of a dynamical system involves the analysis of its 'phase space, which is the space defined by all of its variables.",
    "The system's behavior in time is represented as a path through its phase space, and the study of dynamics involves the characterization of the geometry of these paths.",
    "One of the things that is so interesting about cellular automata is that any behavior that appears on scales larger than that of a single cell will be emergent behavior.",
    "Von Neumann proved that cellular automata are capable of universal computation by showing that a universal Turing machine could be embedded in a cellular array."
  ];

  render() {
    const currentQuote = this.state.quote % this.quotes.length;

    return (
      <Fade in={this.state.quoteIsVisible} className="text-monospace">
        <div className="pl-10">
          <div>"{this.quotes[currentQuote]}"</div>
          <div className="font-italic pt-1">&mdash; C.G. Langton</div>
        </div>
      </Fade>
    );
  }
}
