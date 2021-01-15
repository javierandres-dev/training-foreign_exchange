const d = document,
  itemsXpage = 10;
let tcrmh = undefined,
  items = undefined,
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
  tcrmh = await getTRM();
  //console.log(tcrmh);
  const trm = tcrmh[0],
    $value = d.getElementById("value"),
    $date = d.getElementById("date"),
    value =
      trm.valor.substring(0, 1) +
      "." +
      trm.valor.substring(1, trm.valor.length).replace(".", ","),
    date = trm.vigenciadesde.slice(0, 10).replaceAll("-", "/");
  $value.textContent = `${value}`;
  $date.textContent = `${date}`;
  printHistory(0);
};
const printHistory = (start) => {
  let i = start;
  const end = start + itemsXpage,
    $history = d.getElementById("history"),
    $caption = $history.querySelector("caption"),
    $tbody = $history.querySelector("tbody");
  page = end / itemsXpage;
  $caption.textContent = `Page ${page} of ${pages}`;
  for (i; i < end; i++) {
    const trm = tcrmh[i],
      value =
        trm.valor.substring(0, 1) +
        "." +
        trm.valor.substring(1, trm.valor.length).replace(".", ","),
      since = trm.vigenciadesde.slice(0, 10).replaceAll("-", "/"),
      until = trm.vigenciadesde.slice(0, 10).replaceAll("-", "/"),
      $tr = d.createElement("tr"),
      $td1 = d.createElement("td"),
      $td2 = d.createElement("td"),
      $td3 = d.createElement("td"),
      $td4 = d.createElement("td");
    $td1.textContent = `$${value}`;
    $td2.textContent = `${trm.unidad}`;
    $td3.textContent = `${since}`;
    $td4.textContent = `${until}`;
    $tr.appendChild($td1);
    $tr.appendChild($td2);
    $tr.appendChild($td3);
    $tr.appendChild($td4);
    $tbody.appendChild($tr);
  }
};
