const fetchLink = "https://kea-alt-del.dk/kata-distortion/";
function init() {
  setInterval(update, 5000);
  fetch(fetchLink)
    .then(result => result.json())
    .then(data => printQueue(data));
}

function update() {
  fetch(fetchLink)
    .then(result => result.json())
    .then(data => printQueue(data));
}
function printQueue(data) {
  console.log(data);
  document.querySelector("h2").textContent = data.inQueue;
}
init();
