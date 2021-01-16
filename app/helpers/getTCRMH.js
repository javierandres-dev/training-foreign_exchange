"use strict";
export default async function getTCRMH() {
  try {
    const resp = await fetch(
      "https://www.datos.gov.co/resource/mcec-87by.json"
    );
    if (!resp.ok) throw `Error\n\t${resp.status}\n\t${resp.statusText}`;
    const data = await resp.json();
    return data;
  } catch (error) {
    console.warn(error);
  }
}
