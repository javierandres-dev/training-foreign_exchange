"use strict";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Aside from "./components/Aside.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Router from "./components/Router.js";
export default function App() {
  const $body = document.querySelector("body");
  $body.innerHTML = null;
  $body.appendChild(Header());
  $body.appendChild(Nav());
  $body.appendChild(Main());
  $body.appendChild(Aside());
  $body.appendChild(Footer());
  Router();
}
