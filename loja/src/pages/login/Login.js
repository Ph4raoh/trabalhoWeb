import "./Login.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { render } from "@testing-library/react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const mudarpagina = () => {
    history.replace("/inicio");
  };

  render(
    <form method="post" action="/auth">
      <div className="box">
        <h1>Login</h1>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
          name="email"
          className="email"
        />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
          name="email"
          className="email"
        />
        <button
          type="button"
          onClick={() => RealizarLogin()}
          className="btn btn-primary"
        >
          Entrar
        </button>
      </div>
    </form>
  );

  function RealizarLogin() {
    console.log(email, password);

    axios
      .post(`http://localhost:3001/auth`, { email: email, password: password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (localStorage.getItem("token") != undefined) {
          mudarpagina();
        }
      });
  }
}

export default Login;
