// let animal = {
//   eats: true,
//   pee: true,
//   walk() {
//     alert("animals eat and pee");
//   },
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };

// rabbit.walk();
// longEar.walk();
// alert(longEar.jumps);
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

// alert(admin.fullName);

// admin.fullName = "Dmitry Volchok";
// alert(admin.name);
// alert(admin.surname);

////////////////////////////////-------------------------////////////////////////////
// animal method
// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert(`walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   },
// };

// let rabbit = {
//   name: "white rabbit",
//   __proto__: animal,
// };

// rabbit.sleep();
// // console.log(rabbit.sleep());
// console.log(rabbit.isSleeping);
// console.log(animal.isSleeping);

var a = 5;
function f() {
  if (a) {
    console.log(a);
    // var a = 10;
  }
}

f();

var a = 5;
console.log("first a", a);
function valueSee() {
  var a = 10;
  console.log("a in function", this.a);
  if (a) {
    console.log("a if if", a);
    console.log("this a in if", this.a);
  }
}

valueSee();

function request() {
  console.log(this.responseText);
}

let xhr = new XMLHttpRequest();
xhr.addEventListener("load", request);
console.log(
  xhr.open(
    "GET",
    "https://github.com/DmitryVolchok/protoTrain/blob/master/readMe.txt"
  )
);
xhr.open(
  "GET",
  "https://github.com/DmitryVolchok/protoTrain/blob/master/readMe.txt"
);

xhr.send();

console.log("check valus");
