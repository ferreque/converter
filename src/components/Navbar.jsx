import React from "react";
import { TbArrowsLeftRight } from "react-icons/tb";

export default function Navbar() {
  return (
    <>
      <nav className="App-navbar">
        <TbArrowsLeftRight className="arrowLR" />
        unit converter
      </nav>
      <hr className="hr" />
    </>
  );
}
