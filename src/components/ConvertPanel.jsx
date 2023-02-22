import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbArrowsLeftRight } from "react-icons/tb";
import SaveList from "./SaveList";
import nextId from "react-id-generator";

export default function ConvertPanel() {
  const [conversion, setConversion] = useState(
    JSON.parse(localStorage.getItem("conversion")) || "km → miles"
  );
  const [uniti, setUniti] = useState(
    JSON.parse(localStorage.getItem("uniti")) || "miles"
  );
  const [uniti2, setUniti2] = useState(
    JSON.parse(localStorage.getItem("uniti2")) || "km"
  );
  const [inputValor, setInputValor] = useState(
    JSON.parse(localStorage.getItem("inputValor")) || 0
  );
  const [list, setList] = useState([]);
  const [valor, setValor] = useState(inputValor);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    fetch("https://back-converter.vercel.app/data/all")
      .then((res) => res.json())
      .then((json) => setList(json));
    setFlag(true);
  }, [flag]);

  localStorage.setItem("conversion", JSON.stringify(conversion));
  localStorage.setItem("inputValor", JSON.stringify(inputValor));
  let htmlId = nextId();

  useEffect(() => {
    switch (conversion) {
      case "km → miles":
        setValor(0.62137 * inputValor);
        setUniti("miles");
        setUniti2("km");
        break;
      case "miles → km":
        setValor(1.60934 * inputValor);
        setUniti("km");
        setUniti2("miles");
        break;
      case "feeds → meters":
        setValor(0.3048 * inputValor);
        setUniti("meters");
        setUniti2("feeds");
        break;
      case "meters → feeds":
        setValor(3.28084 * inputValor);
        setUniti("feeds");
        setUniti2("meters");
        break;
      case "cm → inches":
        setValor(0.393701 * inputValor);
        setUniti("inches");
        setUniti2("cm");
        break;
      case "inches → cm":
        setValor(2.54 * inputValor);
        setUniti("cm");
        setUniti2("inches");
        break;
      default:
        break;
    }
    localStorage.setItem("valor", JSON.stringify(parseFloat(valor).toFixed(2)));
    localStorage.setItem("uniti", JSON.stringify(uniti));
    localStorage.setItem("uniti2", JSON.stringify(uniti2));
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
    localStorage.setItem("conversion", JSON.stringify(conversion));
    setInputValor(valor.toFixed(2));
    localStorage.setItem("inputValor", JSON.stringify(inputValor));
    localStorage.setItem("valor", JSON.stringify(valor));
  };

  const saveFunction = () => {
    setList([{ id: htmlId, inputValor, uniti2, valor, uniti }, ...list]);
    fetch("https://back-converter.vercel.app/data/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: htmlId, inputValor, uniti2, valor, uniti }),
    }).then((res) => res.json());
  };

  return (
    <>
      <div className="convertPanel">
        <h1>convert</h1>
        <div>
          <select
            className="panelSelect"
            defaultValue={conversion}
            id="selectId"
            onClick={(e) => setConversion(e.target.value)}
          >
            <option>km → miles</option>
            <option>miles → km</option>
            <option>feeds → meters</option>
            <option>meters → feeds</option>
            <option>cm → inches</option>
            <option>inches → cm</option>
          </select>

          <TbArrowsLeftRight
            className="corazoncito"
            onClick={() => arrowFunc()}
          />

          <input
            className="panelInput"
            onChange={(e) => setInputValor(e.target.value)}
            defaultValue={inputValor !== 0 ? inputValor : ""}
            id="inputId"
            type="number"
            placeholder="Introduzca un numero"
          />
          {uniti2}
          <h2 className="corazone">
            <AiOutlineHeart
              className="corazoncito"
              onClick={() => saveFunction()}
            />
            {parseFloat(valor).toFixed(2)} {uniti}
          </h2>
        </div>
      </div>
      <SaveList list={list} setList={setList} flag={flag} setFlag={setFlag} />
    </>
  );
}
