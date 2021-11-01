const fruits = [
  "apple",
  "pomenade",
  "pineapple",
  "watermelon",
  "banana",
  "grappes",
];

// Head

const head = (list) => {
  const [first] = list;
  return first;
};

console.assert("apple" === head(fruits));

// Tail

const tail = (list) => {
  const [, ...rest] = list;
  return rest;
};

console.assert(
  JSON.stringify([
    "pomenade",
    "pineapple",
    "watermelon",
    "banana",
    "grappes",
  ]) === JSON.stringify(tail(fruits))
);

// Init

const init = (list) => list.slice(0, list.length - 1);

console.assert(
  JSON.stringify(["apple", "pomenade", "pineapple", "watermelon", "banana"]) ===
    JSON.stringify(init(fruits))
);

// Last

const last = (list) => [...list].pop();

console.assert("grappes" === last(fruits));
