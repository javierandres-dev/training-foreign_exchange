"use strict";
export default function Header() {
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.innerHTML = `
<h1>foreign exchange</h1>
<h2>
  Built by
  <a
    href="https://www.javierandresgp.com"
    target="_blank"
    rel="noopener noreferrer"
    >Javier Andrés GP</a
  >
</h2>
<p>Found a bug or have an idea? Contact me</p>
  `;
  return $header;
}
