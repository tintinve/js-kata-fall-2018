const changer = document.querySelector(".divTransition");
changer.dataset.last = "";

function init() {
  setInterval(() => {
    addColor(changer);
  }, 1000);
  function addColor(el) {
    let color = generateColor();
    while (color === el.dataset.last) {
      color = generateColor();
      console.log("Mismo color");
    }
    el.dataset.last = color;
    el.style.backgroundColor = color;
  }
  function generateColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;
  }
}

init();
