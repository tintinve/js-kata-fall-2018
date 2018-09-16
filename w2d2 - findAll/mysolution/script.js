const animals = [
  "dog",
  "cat",
  "horse",
  "cat",
  "mouse",
  "dog",
  "cat",
  "cat",
  "dog"
];
//console.log(animals.forEach(cats => cats.forEach("cat")));
//const catsAt = findAll(animals, "cat");
//console.log(catsAt);
function findAll(arr, val) {
  var indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
}

var catsAt = findAll(animals, "dog");
console.log(catsAt);
