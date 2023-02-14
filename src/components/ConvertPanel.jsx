import React, { useEffect } from "react";
import arrows from "../img/arrows.png";
import { useState } from "react";

export default function ConvertPanel() {
  const [conversion, setConversion] = useState("kilómetros a millas");
  const [inputValor, setInputValor] = useState(0);
  const [valor, setValor] = useState(inputValor);
  console.log(conversion);

  useEffect(() => {
    switch (conversion) {
      case "kilómetros a millas":
        setValor(0.62137 * inputValor);
        break;
      case "millas a kilómetros":
        setValor(1.60934 * inputValor);
        break;
      case "pies a metros":
        setValor(0.3048 * inputValor);
        break;
      case "metros a pies":
        setValor(3.28084 * inputValor);
        break;
      case "centímetros a pulgadas":
        setValor(0.393701 * inputValor);
        break;
      case "pulgadas a centímetros":
        setValor(2.54 * inputValor);
        break;
      default:
        break;
    }
  });

  return (
    <>
      <div className="convertPanel">
        <h1>convert</h1>

        <select onClick={(e) => setConversion(e.target.value)}>
          <option>kilómetros a millas</option>
          <option>millas a kilómetros</option>
          <option>pies a metros</option>
          <option>metros a pies</option>
          <option>centímetros a pulgadas</option>
          <option>pulgadas a centímetros</option>
        </select>
        <button>
          <img id="imgArrows" src={arrows} height="24px" alt="doubleArrow" />
        </button>
        <input
          type="number"
          placeholder="Introduzca un numero"
          onChange={(e) => setInputValor(e.target.value)}
        />
      </div>
      <h1>{valor}</h1>
    </>
  );
}
