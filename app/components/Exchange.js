"use strict";
export default function Exchange() {
  const $exchange = document.createElement("section");
  $exchange.classList.add("exchange");
  $exchange.innerHTML = `
<h3 class="title">money exchange</h3>
<form class="exchange__form">
  <fieldset>
    <legend class="exchange__hint">
      Set the prices and press the show button
    </legend>
    <label for="buyUsd">Buy US Dollar</label>
    <input type="number" id="buyUsd" />
    <label for="sellUsd">Sell US Dollar</label>
    <input type="number" id="sellUsd" />
    <label for="buyEur">Buy Euro</label>
    <input type="number" id="buyEur" />
    <label for="sellEur">Sell Euro</label>
    <input type="number" id="sellEur" />
    <button type="submit" class="exchange__btn" id="btnRetail">Show</button>
  </fieldset>
</form>
  `;
  return $exchange;
}
