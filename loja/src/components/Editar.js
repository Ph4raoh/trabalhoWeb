import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, useParams } from "react-router-dom";
function Editar() {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const [games, setGames] = useState([]);

  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [year, setYear] = useState([]);

  let { id } = useParams();
  console.log(games);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/game/${id}`, config)
      .then((response) => {
        setTitle(response.data.title);
        setPrice(response.data.price);
        setYear(response.data.year);
      })

      .catch(console.log);
  }, []);

  const history = useHistory();

  console.log("essa aqui: ", id);

  return (
    <div id="entradaDeDados">
      {" "}
      <input
        //value={title}
        id="entradaDedados"
        type="text"
        placeholder={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        //value={year}
        id="entradaDedados"
        type="text"
        placeholder={year}
        onChange={(event) => setYear(event.target.value)}
      ></input>
      <input
        //value={price}
        id="entradaDedados"
        type="text"
        placeholder={price}
        onChange={(event) => setPrice(event.target.value)}
      ></input>
      <button onClick={() => editarJogo(id)} id="butnovo">
        Atualizar
      </button>
    </div>
  );

  function editarJogo(id) {
    var body = { title, price, year };

    console.log(body);

    axios
      .put(`http://localhost:3001/game/${id}`, body, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        console.log(res.data);
        history.replace(`/inicio`);
      });
  }
}

export default Editar;
