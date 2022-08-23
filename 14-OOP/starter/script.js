'use strict';

// const People = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Instance methods (dont create in constructor function)
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const pierre = new People('Pierre', 2003);
// const jay = 12;
// console.log(pierre);

// console.log(pierre instanceof People);
// console.log(jay instanceof People);

// console.log(People.prototype);

// People.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// pierre.calcAge();

// console.log(pierre.__proto__);
// console.log(pierre.__proto__ === People.prototype);
// console.log(People.prototype.isPrototypeOf(pierre));

// People.prototype.species = 'Homo Sapiens';
// console.log(pierre.species);
// console.log(pierre.hasOwnProperty('firstName'));

// console.log(pierre.__proto__);

/*
console.log(pierre.__proto__.__proto__.__proto__);
console.dir(People.prototype.constructor);

const arr = [3, 6, 7, 4, 5, 6, 9, 3];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

//Not a good idea (new js update might destroy)
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

//class ES6

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //instance
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//       return this._fullName;
//     } else {
//       alert(`${name} is not a full name`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   //static
//   static hey() {
//     console.log('Hey there');
//     console.log(this);
//   }
// }
// const jonas = new PersonCl('Jonas Schmedtmann', 2013);
// console.log(jonas.fullName);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge;

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //Linking prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I studied ${this.course}`);
// };

// const mike = new Student('Mike', 1991, 'Physics');
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.dir(Student.prototype.constructor);
// console.log(mike instanceof Person);
// Student.prototype.constructor = Student;
// console.log(Student.prototype.constructor);

/*
class Student {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  static hey() {
    console.log('Hey');
  }
}
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('error');
  }
  
  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
      );
    }
}


const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();


const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

*/

//Public fields
//Private fields
//Public methods
//Private methods
// (there is also the static version)

class Account {
  //Public fields (instances)
  locale = navigator.language;
  // _movements = [];

  //Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    //Protected Property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return [...this.#movements];
  }

  deposit(value) {
    this.#movements.push(value);
  }

  withdrawal(value) {
    this.deposit(-value);
  }

  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan Approved`);
    }
  }

  //Private methods
  #approveLoan() {
    return true;
  }

  static helper() {
    console.log('Helper');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.withdrawal(250);
acc1.requestLoan(1000);
Account.helper();
// console.log(acc1.#approveLoan(100));

// acc1.helper();

//Chaining

acc1.deposit(300).deposit(500);
