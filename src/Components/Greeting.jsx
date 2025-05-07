import React from "react";
import day from "../assets/day.svg";
import evening from "../assets/evening.svg";
import night from "../assets/night.svg";

export function Greeting() {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 6 && hours <= 12) {
    return (
      <>
        <h1 className="greeting">
          <img src={day} alt="" />
          Good Morning
        </h1>
      </>
    );
  } else if (hours >= 12 && hours <= 17) {
    return (
      <>
        <h1 className="greeting">
          <img src={day} alt="" />
          Good Afternoon
        </h1>
      </>
    );
  } else if (hours >= 17 && hours <= 21) {
    return (
      <>
        <h1 className="greeting">
          <img src={evening} alt="" />
          Good Evening
        </h1>
      </>
    );
  } else {
    return (
      <>
        <h1 className="greeting">
          <img src={night} alt="" />
          Good Night!
        </h1>
      </>
    );
  }
}
