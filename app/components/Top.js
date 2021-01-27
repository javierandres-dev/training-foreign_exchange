"use strict";
// set up Top component
export default function Top() {
  const $top = document.createElement("div");
  $top.classList.add("dev");
  $top.innerHTML = `
<div class="top">
  © Built by
  <a
    href="https://www.javierandresgp.com"
    target="_blank"
    rel="noopener noreferrer"
    >Javier Andrés GP</a
  >
</div>
  `;
  return $top;
}
