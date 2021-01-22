"use strict";
// set up the "header" view
export default function Header() {
  const $header = document.createElement("header");
  $header.classList.add("jagp");
  $header.innerHTML = `
<h1>
  © Built by
  <a
    href="https://www.javierandresgp.com"
    target="_blank"
    rel="noopener noreferrer"
    >Javier Andrés GP</a
  >
</h1>
  `;
  return $header;
}
