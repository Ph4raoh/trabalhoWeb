import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
function Form() {
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [year, setYear] = useState([]);
  const history = useHistory();
  const mudarpagina = () => {
    history.replace("/inicio");
  };

  return (
    <div id="entradaDeDados">
      {" "}
      <input
        onChange={(event) => setTitle(event.target.value)}
        id="entradaDedados"
        type="text"
        placeholder="Titulo"
      ></input>
      <input
        onChange={(event) => setYear(event.target.value)}
        id="entradaDedados"
        type="text"
        placeholder="Ano"
      ></input>
      <input
        onChange={(event) => setPrice(event.target.value)}
        id="entradaDedados"
        type="text"
        placeholder="Preço"
      ></input>
      <button onClick={() => RealizarCadastro()} id="butnovo">
        Cadastrar
      </button>
    </div>
  );

  function RealizarCadastro() {
    var body = { title, price, year };

    axios
      .post(`http://localhost:3001/game`, body, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      });
  }
}

export default Form;
