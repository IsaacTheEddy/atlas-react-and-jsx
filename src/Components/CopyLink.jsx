import React from "react";
import copy from "../assets/copy.svg";

export function CopyLink(props) {
  function handleClick() {
    navigator.clipboard.writeText(props.link);
    alert(`Just copied ${props.link} to your clipboard`);
  }
  return (
    <a onClick={handleClick}>
      <img src={copy} alt="copy image" />
    </a>
  );
}
