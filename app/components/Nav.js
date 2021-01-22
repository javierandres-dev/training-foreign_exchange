"use strict";
// set up the "navigation bar" view
export default function Nav() {
  const $nav = document.createElement("nav");
  $nav.classList.add("nav");
  $nav.innerHTML = `
<a href="#/">home</a>
<a href="#/money-exchange">money exchange</a>
  `;
  return $nav;
}
