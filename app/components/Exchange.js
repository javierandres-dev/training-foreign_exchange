"use strict";
export default function Exchange() {
  const $exchange = document.createElement("section");
  $exchange.innerHTML = `
<h3 class="title">money exchange</h3>
<form class="exchange" id="exchange">
  <fieldset>
    <legend>
      Set the prices and press the show button
    </legend>
    <label for="buyUsd">Buy US Dollar</label>
    <input type="number" id="buyUsd" required />
    <label for="sellUsd">Sell US Dollar</label>
    <input type="number" id="sellUsd" required />
    <label for="buyEur">Buy Euro</label>
    <input type="number" id="buyEur" required />
    <label for="sellEur">Sell Euro</label>
    <input type="number" id="sellEur" required />
    <button type="submit" id="btnRetail">Show</button>
  </fieldset>
</form>
  `;
  return $exchange;
}
