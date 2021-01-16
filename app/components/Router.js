"use strict";
import Today from "./Today.js";
import History from "./History.js";
export default function Router() {
  const { hash } = location,
    $main = document.querySelector("main"),
    $aside = document.querySelector("aside");
  if (hash === "" || hash === "#/") {
    $main.appendChild(Today());
    $aside.appendChild(History());
  } else if (hash === "#/money-exchange") {
  } else {
    console.warn("Error 404 - Page Not Found");
  }
}
