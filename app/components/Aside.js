"use strict";
// set up the "aside" tag
export default function Aside() {
  const $aside = document.createElement("aside");
  $aside.classList.add("container");
  return $aside;
}
