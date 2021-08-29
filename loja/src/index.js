import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import Editar from "./components/Editar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={App} path="/inicio" />
      <Route path="/editar/:id" children={<Editar />} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
