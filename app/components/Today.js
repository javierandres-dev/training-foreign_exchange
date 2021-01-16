"use strict";
export default function Today() {
  const $today = document.createElement("section");
  $today.classList.add("today");
  $today.innerHTML = `
<h3 class="title">today</h3>
<div class="today__flags">
  <figure class="today__flag">
    <img src="app/images/usa.png" alt="USD" />
    <figcaption class="today__currency">US Dollar $1</figcaption>
  </figure>
  <figure class="today__flag">
    <img src="app/images/col.png" alt="COP" />
    <figcaption class="today__currency">
      COP $<span id="value"></span>
    </figcaption>
  </figure>
</div>
<p id="date"></p>
  `;
  return $today;
}
