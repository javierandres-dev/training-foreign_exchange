"use strict";
export default function Header() {
  const d = document,
    $header = d.createElement("header");
  $header.classList.add("header");
  $header.innerHTML = `
<h1 class="header__title">foreing exchange</h1>
<h2 class="header__dev">
  Built by
  <a
    href="https://www.javierandresgp.com"
    target="_blank"
    rel="noopener noreferrer"
    >Javier Andrés GP</a
  >
</h2>
<p class="header__call">Found a bug or have an idea? Contact me</p>
  `;
  return $header;
}
