"use strict";
let modal_container = document.querySelector("#modal_container");
let closeButton = document.querySelector("#closeButton");
document.querySelectorAll("article a").forEach(link => {
  link.addEventListener("click", showModal);
});
function showModal() {
  modal_container.classList.remove("hidden");
}
closeButton.addEventListener("click", closeModal);
function closeModal() {
  modal_container.classList.add("hidden");
}
console.log("Ok");
