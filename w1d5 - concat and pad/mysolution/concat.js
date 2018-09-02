let name = "Pedro";
const len = name.length;
let str = "           Pedro";
let parag = "The quick brown fox jumped over the lazy dog. If the dog barked";
let searchTerm = "quick brown";
let indexOfFirst = parag.indexOf(searchTerm);
let indexSubstring = parag.substr(indexOfFirst, parag.length);
let change = "dog";
let filename = "image#.jpg";
let changeChar = "#";

console.log(`${name}`);
console.log(len);
console.log(name[0]);
console.log(str.trim());
console.log(indexOfFirst);
console.log(indexSubstring);
console.log(parag.replace(change, "broder"));

// Solution 1
console.log(filename.replace(changeChar, "3"));
