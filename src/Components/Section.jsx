import React from "react";

export function Section(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}
