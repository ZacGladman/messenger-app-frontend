import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Views from "./components/Views";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Views />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
