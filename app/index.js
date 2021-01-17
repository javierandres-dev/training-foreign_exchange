"use strict";
import App from "./App.js";
import setPrices from "./helpers/setPrices.js";
window.addEventListener("hashchange", App);
document.addEventListener("DOMContentLoaded", () => {
  App();
  eventListeners();
});
const eventListeners = () => {
  document.addEventListener("click", (e) => {
    if (e.target.id === "btnRetail") {
      e.preventDefault();
      setPrices();
    }
  });
};
