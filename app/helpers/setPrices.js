"use strict";
import printPrices from "./printPrices.js";
export default function setPrices() {
  const d = document,
    buyUsd = d.getElementById("buyUsd"),
    sellUsd = d.getElementById("sellUsd"),
    buyEur = d.getElementById("buyEur"),
    sellEur = d.getElementById("sellEur");
  if (
    buyUsd.value.length === 0 ||
    sellUsd.value.length === 0 ||
    buyEur.value.length === 0 ||
    sellEur.value.length === 0
  ) {
    console.warn("All fields are required.");
    return;
  }
  printPrices(buyUsd.value, sellUsd.value, buyEur.value, sellEur.value);
}
