"use strict";
import Today from "./Today.js";
import History from "./History.js";
import Exchange from "./Exchange.js";
import Retail from "./Retail.js";
import { printTCRMH } from "../helpers/printTCRMH.js";
export default function Router() {
  const { hash } = location,
    $main = document.querySelector("main"),
    $aside = document.querySelector("aside");
  if (hash === "" || hash === "#/") {
    $main.innerHTML = null;
    $main.appendChild(Today());
    $aside.innerHTML = null;
    $aside.appendChild(History());
    printTCRMH();
  } else if (hash === "#/money-exchange") {
    $main.innerHTML = null;
    $main.appendChild(Exchange());
  } else if (hash === "#/retail") {
    $main.innerHTML = null;
    $main.appendChild(Retail());
  } else {
    $main.innerHTML = null;
    $main.innerHTML = "Error 404 - Page Not Found";
    console.warn("Error 404 - Page Not Found");
  }
}
