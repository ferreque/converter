import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbArrowsLeftRight } from "react-icons/tb";

export default function ConvertPanel() {
  const [conversion, setConversion] = useState("km → miles");
  const [uniti, setUniti] = useState("miles");
  const [inputValor, setInputValor] = useState(0);
  const [valor, setValor] = useState(inputValor);

  useEffect(() => {
    switch (conversion) {
      case "km → miles":
        setValor(0.62137 * inputValor);
        setUniti("miles");
        break;
      case "miles → km":
        setValor(1.60934 * inputValor);
        setUniti("km");
        break;
      case "feeds → meters":
        setValor(0.3048 * inputValor);
        setUniti("meters");
        break;
      case "meters → feeds":
        setValor(3.28084 * inputValor);
        setUniti("feeds");
        break;
      case "cm → inches":
        setValor(0.393701 * inputValor);
        setUniti("inches");
        break;
      case "inches → cm":
        setValor(2.54 * inputValor);
        setUniti("cm");
        break;
      default:
        break;
    }
  });

  const arrowFunc = () => {
    if (conversion === "km → miles") {
      document.getElementById("selectId").value = "miles → km";
    }
    if (conversion === "miles → km") {
      document.getElementById("selectId").value = "km → miles";
    }
    if (conversion === "feeds → meters") {
      document.getElementById("selectId").value = "meters → feeds";
    }
    if (conversion === "meters → feeds") {
      document.getElementById("selectId").value = "feeds → meters";
    }
    if (conversion === "cm → inches") {
      document.getElementById("selectId").value = "inches → cm";
    }
    if (conversion === "inches → cm") {
      document.getElementById("selectId").value = "cm → inches";
    }
    document.getElementById("inputId").value = valor.toFixed(2);
    setConversion(document.getElementById("selectId").value);

    console.log(conversion);
  };

  const saveFunction = () => {};

  return (
    <>
      <div className="convertPanel">
        <h1>convert</h1>
        <select id="selectId" onClick={(e) => setConversion(e.target.value)}>
          <option>km → miles</option>
          <option>miles → km</option>
          <option>feeds → meters</option>
          <option>meters → feeds</option>
          <option>cm → inches</option>
          <option>inches → cm</option>
        </select>

        <TbArrowsLeftRight onClick={() => arrowFunc()} />
        <input
          id="inputId"
          type="number"
          placeholder="Introduzca un numero"
          onChange={(e) => setInputValor(e.target.value)}
        />
        <h1 className="corazone">
          <AiOutlineHeart onClick={() => saveFunction()} />
          {valor.toFixed(2)}
          {uniti}
        </h1>
      </div>
      <h1>saved</h1>
    </>
  );
}
