import React from "react";
import arrows from "../img/arrows.png";

export default function Navbar() {
  return (
    <nav className="App-navbar">
      <p>
        <img id="imgArrows" src={arrows} height="24px" alt="doubleArrow" />
        unit converter
      </p>
    </nav>
  );
}
