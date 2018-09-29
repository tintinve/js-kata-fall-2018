let sec0;
function init() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  let t = setTimeout(init, 1000);
  let sec0 = "digit" + s.toString()[0];
  let sec1 = "digit" + s.toString()[1];
  let min0 = "digit" + m.toString()[0];
  let min1 = "digit" + m.toString()[1];
  let hour0 = "digit" + h.toString()[0];
  let hour1 = "digit" + h.toString()[1];
  document.querySelector("#sec0").className = "";
  document.querySelector("#sec0").classList.add(sec0);
  document.querySelector("#sec1").className = "";
  document.querySelector("#sec1").classList.add(sec1);
  //____
  document.querySelector("#min0").className = "";
  document.querySelector("#min0").classList.add(min0);
  document.querySelector("#min1").className = "";
  document.querySelector("#min1").classList.add(min1);
  //____
  document.querySelector("#hour0").className = "";
  document.querySelector("#hour0").classList.add(hour0);
  document.querySelector("#hour1").className = "";
  document.querySelector("#hour1").classList.add(hour1);
}
//esta función pone un cero antes de
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
init();
