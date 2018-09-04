function fetchData() {
  fetch("https://kea-alt-del.dk/twitter/api/")
    .then(e => e.json())
    .then(showContent);
}
function showContent(data) {
  console.log(data);
  data.forEach(showEvent);
  console.log(showEvent);
}

fetchData();
