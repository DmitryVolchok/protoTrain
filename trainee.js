let animal = {
  eats: true,
  pee: true,
  walk() {
    alert("animals eat and pee");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

rabbit.walk();
// rabbit.__proto__ = animal;
