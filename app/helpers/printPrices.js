"use strict";
// show prices established by the user to the public
export default function printPrices(buyUsd, sellUsd, buyEur, sellEur) {
  location.hash = "#/retail";
  setTimeout(() => {
    const d = document,
      $weBuyUsd = d.getElementById("weBuyUsd"),
      $weSellUsd = d.getElementById("weSellUsd"),
      $weBuyEur = d.getElementById("weBuyEur"),
      $weSellEur = d.getElementById("weSellEur");
    $weBuyUsd.textContent = `$${
      buyUsd.substring(0, 1) +
      "." +
      buyUsd.substring(1, buyUsd.length).replace(".", ",")
    } COP`;
    $weSellUsd.textContent = `$${
      sellUsd.substring(0, 1) +
      "." +
      sellUsd.substring(1, sellUsd.length).replace(".", ",")
    } COP`;
    $weBuyEur.textContent = `$${
      buyEur.substring(0, 1) +
      "." +
      buyEur.substring(1, buyEur.length).replace(".", ",")
    } COP`;
    $weSellEur.textContent = `$${
      sellEur.substring(0, 1) +
      "." +
      sellEur.substring(1, sellEur.length).replace(".", ",")
    } COP`;
  }, 1000);
}
