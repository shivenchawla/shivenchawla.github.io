"use strict";

function openLinkedDisclosure() {
  const target = document.getElementById(window.location.hash.slice(1));
  const disclosure = target && target.closest("details");
  if (disclosure) {
    disclosure.open = true;
    target.scrollIntoView();
  }
}

window.addEventListener("hashchange", openLinkedDisclosure);
openLinkedDisclosure();
