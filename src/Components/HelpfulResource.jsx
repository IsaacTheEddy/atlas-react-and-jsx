import React from "react";
import { OpenLink } from "./OpenLink";
import { CopyLink } from "./CopyLink";

export function HelpfulResource(props) {
  return (
    <div className="helpful-resource">
      <span>{props.label}</span>
      <OpenLink link={props.link} />
      <CopyLink link={props.link} />
    </div>
  );
}
