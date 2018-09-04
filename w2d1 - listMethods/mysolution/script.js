"use strict";
let method = "modify";
function listMethods() {
  let list = document.querySelectorAll("#" + method + " > ul > li");
  list.forEach(displayElement);
}
function displayElement(element) {
  console.log(element.textContent);
}
listMethods();
//listMethods("modify");
//listMethods("info");
//listMethods("newarray");
