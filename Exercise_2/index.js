// Concat

const pets = ["dog", "cat", "rabbit"];
const wilds = ["lion", "cheetah", "cougar"];

const concat = (a, b) => [...a, ...b];

console.assert(
  JSON.stringify(["dog", "cat", "rabbit", "lion", "cheetah", "cougar"]) ===
    JSON.stringify(concat(pets, wilds))
);

// Opcional

const concatMultiple = (...args) =>
  args.reduce((acc, element) => concat(acc, element), []);

const amphibians = ["frog", "toad", "salamander"];

console.assert(
  JSON.stringify([
    "dog",
    "cat",
    "rabbit",
    "lion",
    "cheetah",
    "cougar",
    "frog",
    "toad",
    "salamander",
  ]) === JSON.stringify(concatMultiple(pets, wilds, amphibians))
);
