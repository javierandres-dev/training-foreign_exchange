"use strict";
export default function Nav() {
  const $nav = document.createElement("nav");
  $nav.innerHTML = `
<nav>
  <a href="#/">home</a>
  <a href="#/money-exchange">money exchange</a>
</nav>
  `;
  return $nav;
}
