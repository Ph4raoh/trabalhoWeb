import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Listar(props) {
  const history = useHistory();
  return props.games.map((game, i) => (
    <tr key={game.id}>
      <th scope="row">{i + 1}</th>
      <td>{game.title}</td>
      <td>{game.year}</td>
      <td>{game.price}</td>
      <td>
        <button onClick={() => EditarJogo(game.id)} id="butEditar">
          Editar
        </button>
      </td>
      <td>
        <button onClick={() => removerJogo(game.id)} id="butRemover">
          Remover
        </button>
      </td>
    </tr>
  ));

  function removerJogo(id) {
    axios
      .delete(`http://localhost:3001/game/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      });
  }
  function EditarJogo(id) {
    history.replace(`/editar/${id}`);
  }
}

export default Listar;
