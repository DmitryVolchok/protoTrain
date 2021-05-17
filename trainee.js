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

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

rabbit.walk();
longEar.walk();
alert(longEar.jumps);
// rabbit.__proto__ = animal;

////--------------------------------////////////////
// seter

let user = {
  name: "Dmitry",
  surname: "Minchenok",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

alert(admin.fullName);

admin.fullName = "Dmitry Volchok";
alert(admin.name);
alert(admin.surname);
