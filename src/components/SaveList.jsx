import React from "react";
import { useEffect, useState } from "react";

export default function SaveList({ list, setFlag }) {
  const deleteT = (id) => {
    fetch("https://back-converter.vercel.app/data/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .finally(() => setFlag(false));
  };

  return (
    <>
      <h3 className="save">saved</h3>
      {list !== [] ? (
        <ul className="contenedor">
          {list.map((item, i) => (
            <li className="saveList" key={i}>
              {" "}
              {parseFloat(item.inputValor).toFixed(2)} {item.uniti2} →{" "}
              {parseFloat(item.valor).toFixed(2)} {item.uniti}{" "}
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
