let app = document.querySelector("#app");
let template = document.querySelector("template").content;
function generate() {
  for (i = 0; i < 5; i++) {
    const clone = template.cloneNode(true);
    //la proxima linea genera un numero entre 0 y 360;
    let color = Math.floor(Math.random() * 360);
    clone.querySelector(".bkgColor").style.backgroundColor =
      "hsl(" + color + ",70%,70%)";
    clone.querySelector("code").textContent =
      ".color" + i + "{backgroundColor:hsl(" + color + ",70%,70%)}";
    app.appendChild(clone);
  }
}
generate();
