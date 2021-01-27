"use strict";
// set up Bottom component
export default function Bottom() {
  const $bottom = document.createElement("div");
  $bottom.classList.add("dev");
  $bottom.innerHTML = `
<div class="bottom">
  © Built by
  <a
    href="https://www.javierandresgp.com"
    target="_blank"
    rel="noopener noreferrer"
    >Javier Andrés GP</a
  >
</div>
  `;
  return $bottom;
}
