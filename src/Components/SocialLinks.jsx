import React from "react";
import linkedIn from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export function SocialLinks() {
  return (
    <div className="social-links">
      <a
        rel={"external"}
        target="_blank"
        href={"https://www.linkedin.com/in/isaactheedwards"}
      >
        <img src={linkedIn} alt="LinkedIn-Logo" />
      </a>
      <a
        rel={"external"}
        target="_blank"
        href={"https://github.com/IsaacTheEddy/atlas-react-and-jsx"}
      >
        <img src={github} alt="GitHub-Logo" />
      </a>
    </div>
  );
}
