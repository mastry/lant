import React from "react";
import antLogo from "../../images/ant.svg";

export interface ILogoProps {
  width: number;
  height: number;
}

export function Logo(props: ILogoProps) {
  return (
    <img
      src={antLogo}
      alt="Ant by FELIX FX from the Noun Project"
      width={props.width}
      height={props.height}
    />
  );
}
