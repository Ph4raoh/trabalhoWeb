import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Listar from "./components/Listar";
import Form from "./components/Form";

import Editar from "./components/Editar";
function App() {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/games", config)
      .then((response) => setGames(response.data.games))
      .catch(console.log);
  }, []);

  return (
    <div id="tabela">
      <Form />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Título</th>
            <th scope="col">Ano</th>
            <th scope="col">Preço</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <Listar games={games} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
