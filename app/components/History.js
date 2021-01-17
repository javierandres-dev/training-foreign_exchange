"use strict";
export default function History() {
  const $history = document.createElement("section");
  $history.setAttribute("id", "history");
  $history.innerHTML = `
<h3 class="title">history</h3>
<table class="history">
  <caption></caption>
  <thead>
    <tr>
      <th>VALUE</th>
      <th>UNIT</th>
      <th>VALID SINCE</th>
      <th>VALID UNTIL</th>
    </tr>
  </thead>
  <tbody></tbody>
  <tfoot>
    <tr><td colspan="4" id="pages"></td></tr>
  </tfoot>
</table>
  `;
  return $history;
}
