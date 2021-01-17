"use strict";
import printPrices from "./printPrices.js";
let flag = 0;
export default function setPrices() {
  const d = document,
    buyUsd = d.getElementById("buyUsd"),
    sellUsd = d.getElementById("sellUsd"),
    buyEur = d.getElementById("buyEur"),
    sellEur = d.getElementById("sellEur"),
    $main = d.querySelector("main");
  if (
    buyUsd.value.length === 0 ||
    sellUsd.value.length === 0 ||
    buyEur.value.length === 0 ||
    sellEur.value.length === 0
  ) {
    if (flag === 0) {
      flag++;
      const $p = d.createElement("p");
      $p.classList.add("warning");
      $p.innerHTML = "All fields are required.";
      $main.appendChild($p);
      setTimeout(() => {
        $main.removeChild($p);
        flag--;
      }, 4000);
    }
    return;
  }
  printPrices(buyUsd.value, sellUsd.value, buyEur.value, sellEur.value);
}
