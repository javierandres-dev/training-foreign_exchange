"use strict";
// set up the "retail" view
export default function Retail() {
  const date = new Date().toLocaleString(),
    $retail = document.createElement("table");
  $retail.classList.add("retail");
  $retail.innerHTML = `
<caption class="title">
  retail
</caption>
<thead>
  <tr>
    <th colspan="2">Currency</th>
    <th>We buy</th>
    <th>We sell</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="retail__flag">
      <img src="app/images/usa-.png" alt="usa flag" />
    </td>
    <td>$1 US Dollar</td>
    <td id="weBuyUsd"></td>
    <td id="weSellUsd"></td>
  </tr>
  <tr>
    <td class="retail__flag">
      <img src="app/images/eur-.png" alt="euro flag" />
    </td>
    <td>$1 Euro</td>
    <td id="weBuyEur"></td>
    <td id="weSellEur"></td>
  </tr>
</tbody>
<tfoot>
  <tr>
    <td colspan="4">Last update ${date}</td>
  </tr>
</tfoot>
  `;
  return $retail;
}
