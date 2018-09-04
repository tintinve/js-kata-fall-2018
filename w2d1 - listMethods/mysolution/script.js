"use strict";
let method = "newarray";
function listMethods() {
  let list = document.querySelectorAll("#" + method + " > ul > li");
  list.forEach(displayElement);
}
function displayElement(element) {
  console.log(element.textContent);
}

listMethods("modify");
listMethods("info");
listMethods("newarray");
