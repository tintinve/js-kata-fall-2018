let reviewsArray = [];
let list = document.querySelectorAll("span");
let newArray = [];
for (i = 0; i < list.length; i++) {
  let aReview = list[i].innerText;
  reviewsArray.push(aReview);
}
console.log(reviewsArray);

function findAll(arr, val) {
  var indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
}

for (a = 0; a < 6; a++) {
  var catsAt = findAll(reviewsArray, "" + a + "");
  console.log(catsAt);
  reviewsArray.splice(a, catsAt.length);
}
//console.log(reviewsArray);
//var catsAt = findAll(reviewsArray, "3");
//console.log(catsAt);
