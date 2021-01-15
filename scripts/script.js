const d = document,
  itemsXpage = 10;
let items = undefined,
  pages = undefined,
  page = undefined;

d.addEventListener("DOMContentLoaded", () => {
  printTRM();
});
const getTRM = async () => {
  try {
    const resp = await fetch(
      "https://www.datos.gov.co/resource/mcec-87by.json"
    );
    if (!resp.ok) throw `Error\n\t${resp.status}\n\t${resp.statusText}`;
    const data = await resp.json();
    items = data.length;
    pages = items / itemsXpage;
    return data;
  } catch (error) {
    console.warn(error);
  }
};
const printTRM = async () => {
  const TRM = await getTRM(),
    $today = d.getElementById("today"),
    $history = d.getElementById("history"),
    $span = $today.querySelector("span"),
    $tbody = $history.querySelector("tbody");
  console.log(pages);
  $span.textContent = `${TRM[0].valor}`;
  /*
  $date.textContent = `${TRM[0].vigenciadesde}`;
  TRM.forEach((trm) => {
    const $tr = d.createElement("tr"),
      $td1 = d.createElement("td"),
      $td2 = d.createElement("td"),
      $td3 = d.createElement("td"),
      $td4 = d.createElement("td");
    $td1.textContent = `${trm.valor}`;
    $td2.textContent = `${trm.unidad}`;
    $td3.textContent = `${trm.vigenciadesde}`;
    $td4.textContent = `${trm.vigenciahasta}`;
    $tr.appendChild($td1);
    $tr.appendChild($td2);
    $tr.appendChild($td3);
    $tr.appendChild($td4);
    $tbody.appendChild($tr);
  });
  */
  printHistory(TRM, 990);
};
const printHistory = (trm, start) => {
  let i = start;
  const end = start + itemsXpage,
    $history = d.getElementById("history"),
    $tbody = $history.querySelector("tbody");
  page = pages / itemsXpage;
  console.log(page);
  for (i; i < end; i++) {
    const $tr = d.createElement("tr"),
      $td1 = d.createElement("td"),
      $td2 = d.createElement("td"),
      $td3 = d.createElement("td"),
      $td4 = d.createElement("td");
    $td1.textContent = `${trm[i].valor}`;
    $td2.textContent = `${trm[i].unidad}`;
    $td3.textContent = `${trm[i].vigenciadesde}`;
    $td4.textContent = `${trm[i].vigenciahasta}`;
    $tr.appendChild($td1);
    $tr.appendChild($td2);
    $tr.appendChild($td3);
    $tr.appendChild($td4);
    $tbody.appendChild($tr);
  }
};
