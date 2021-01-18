"use strict";
export default function Header() {
  const $header = document.createElement("header");
  $header.classList.add("dev");
  $header.innerHTML = `
<h1>Foreign Exchange</h1>
<p>
  ©&nbsp;&nbsp;Built by
  <a
    href="https://www.javierandresgp.com"
    target="_blank"
    rel="noopener noreferrer"
    >Javier Andrés GP
  </a>
  <br />
  <span> Found a bug or have an idea? Contact me</span>
</p>
  `;
  return $header;
}
