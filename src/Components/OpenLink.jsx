import React from "react";
import open from "../assets/open.svg";

export function OpenLink(props) {
  function handleClick() {
    window.open(props.link, "_blank");
  }
  return (
    <a onClick={handleClick}>
      <img src={open} alt="open image" />
    </a>
  );
}
