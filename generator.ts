import * as values from "./values.js";

function generate() {
  const left = values.left;
  const right = values.right;

  const leftIndex = getRandomIndex(left.length);
  const rightIndex = getRandomIndex(right.length);

  return {
    left: left[leftIndex],
    right: right[rightIndex],
  };
}

function generateCapitalized() {
  let name = generate();
  name.left = capitalize(name.left);
  name.right = capitalize(name.right);
  return {
    left: name.left,
    right: name.right,
  };
}

function generateAsPeopleName(sep: string = " ", capitalized: boolean = true) {
  let name = capitalized ? generateCapitalized() : generate();
  return name.left + sep + name.right;
}

function getRandomIndex(arrLength: number) {
  return Math.floor(Math.random() * arrLength);
}

function capitalize(str: string) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

export { generate, generateAsPeopleName, generateCapitalized };
