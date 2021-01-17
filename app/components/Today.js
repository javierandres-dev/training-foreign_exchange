"use strict";
export default function Today() {
  const $today = document.createElement("section");
  $today.classList.add("today");
  $today.innerHTML = `
<h3 class="title">today</h3>
<div class="today__flags">
  <figure>
    <img src="app/images/usa.png" alt="USD" />
    <figcaption>$1 US Dollar</figcaption>
  </figure>
  <figure>
    <img src="app/images/col.png" alt="COP" />
    <figcaption>
      $<span id="value"></span> COP
    </figcaption>
  </figure>
</div>
<p id="date"></p>
  `;
  return $today;
}
