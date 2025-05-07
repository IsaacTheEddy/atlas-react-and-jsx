import React from "react";
import links from "../assets/links.json";

export function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer>
      <ul>
        {links.map((link) => (
          <a href={link.link} target="_blank">
            <li>{link.label}</li>
          </a>
        ))}
      </ul>
      <p>@ {year} Atlas School</p>
    </footer>
  );
}
