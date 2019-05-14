import { Ant, AntGene } from "./ant";

export class LangtonAnt extends Ant {
  constructor() {
    super(90, [AntGene.L, AntGene.R]);
  }
}
