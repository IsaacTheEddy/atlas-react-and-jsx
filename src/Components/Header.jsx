import React from "react";
import { Greeting } from "./Greeting";
import { SocialLinks } from "./SocialLinks";

export default function Header() {
  return (
    <nav>
      <div className="app">
        <Greeting />
      </div>
      <div className="social-links">
        <SocialLinks />
      </div>
    </nav>
  );
}
