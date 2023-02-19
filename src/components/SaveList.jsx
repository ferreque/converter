import React from "react";

export default function SaveList({ list, setList }) {
  const deleteT = (t) => {
    let newList = [];
    list.forEach((elemento) => {
      if (elemento.id !== t) {
        newList.push(elemento);
      }
      setList(newList);
      localStorage.setItem("list", JSON.stringify(newList));
    });
  };

  return (
    <>
      <h3 className="save">saved</h3>
      {list !== [] ? (
        <ul className="contenedor">
          {list.map((item, i) => (
            <li className="saveList" key={i}>
              {" "}
              {parseFloat(item.inputValor).toFixed(2)}
              {item.uniti2}→{parseFloat(item.valor).toFixed(2)}
              {item.uniti}{" "}
              <p className="corazoncito" onClick={() => deleteT(item.id)}>
                x
              </p>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
