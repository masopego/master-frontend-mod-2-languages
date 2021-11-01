// Clone

const person = {
  firstName: "Olivia",
  lastName: "Alonso",
  age: 4,
};

const clone = (source) => ({ ...source });

console.assert(
  JSON.stringify({ firstName: "Olivia", lastName: "Alonso", age: 4 }) ===
    JSON.stringify(clone(person))
);

// Merge

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = (source, target) => ({ ...target, ...source });

console.assert(
  JSON.stringify({
    name: "Maria",
    age: 31,
    married: true,
    surname: "Ibañez",
    country: "SPA",
  }) === JSON.stringify(merge(a, b))
);
