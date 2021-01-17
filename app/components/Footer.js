"use strict";
export default function Footer() {
  const $footer = document.createElement("footer");
  $footer.classList.add("footer");
  $footer.innerHTML = `
<p>
  <a
    href="https://www.javierandresgp.com"
    target="_blank"
    rel="noopener noreferrer"
    >&copy; Javier Andrés GP</a
  >
</p>
  `;
  return $footer;
}
