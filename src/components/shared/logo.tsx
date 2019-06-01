import React from "react";
import antLogo from "../../images/ant.svg";
import antLight from "../../images/antLight.svg";

export interface ILogoProps {
  width: number;
  height: number;
  light?: boolean;
  dark?: boolean;
}

/** The lant logo (thanks to FELIX FX and the Noun Project) */
export function Logo(props: ILogoProps) {
  return (
    <img
      src={props.light ? antLight : antLogo}
      alt="Ant by FELIX FX from the Noun Project"
      width={props.width}
      height={props.height}
    />
  );
}
