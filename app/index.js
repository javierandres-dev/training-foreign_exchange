"use strict";
import App from "./App.js";
import setPrices from "./helpers/setPrices.js";
// when the document tree already loaded ...
document.addEventListener("DOMContentLoaded", () => {
  App();
  eventListeners();
});
// when all scripts and styles already loaded ...
window.onload = () => window.addEventListener("hashchange", App);
//event listeners
const eventListeners = () => {
  document.addEventListener("click", (e) => {
    if (e.target.id === "btnRetail") {
      e.preventDefault();
      setPrices();
    }
  });
};
