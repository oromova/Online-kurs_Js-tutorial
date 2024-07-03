let obj = {
  name: "webbrain",
  title: "IT Center",
  fullName: function() {
    return this.name + this.title;
  },
};

class Users {
  name="webbrain";
  title = "IT Center";
  fullName() {
    return this.name + this.title;
  }
}

class User {
  name="webbrain";
  title = "IT Center";
  constructor(name, title){
    //console.log(name, title, "props" ); // webbrain it center props
    this.name = name;
    this.title = title;
  }

  fullName() {
    return this.name + this.title;    
  }
}

let usr1 = new Users()
let usr2 = new User("webbrain", "it center")

console.log(usr1.name);    // webbrain
console.log(obj.name);     // webbrain
console.log(usr1.fullName());   // webbrainIT Center

// classlar parametr qabul qilishi mumkin va bu objlarga xos emas faqat classlarga xos va 
// parametrlarni chaqirish un constructorlardan foydalanamiz

//=========== Getter setter ============

// let object = {
//   name: "webbrain",
//   getName: function () {
//     return this.name;
//   },
// };

// object.getName = "eshmat";
// console.log(object.getName);     // eshmat

let object = {
  name: "webbrain",
  get getName() {
    return this.name;
  },
  set getName(props) {
    return (this.name = props);
  },
};

object.getName = "eshmat";
console.log(object.name);      // eshmat

// endi classlarda gettet va setterlarni ko'rib chiqamiz
// classda ham huddi shunday setda parametr berib ketishimiz kk

class Users {
  name = "webbrain";
  title = "IT Center";

  constructor(name, title) {
    this.name = name;
    this.title = title;
  }

  get fullName() {
    return this.name + " " + this.title;
  }
  set fullName(props) {
    return props
  }
}

let usr = new Users("Eshmat", "Botanika")
console.log(usr);


class Frontend {
  major = "Frontend";
  duration = 6;

  getSubjects() {
    return ["HTML", "CSS", "JS", "ReactJS"];
  }
  getDuration() {
    return this.duration;
  }

  getLocation(prop) {
    let major = {
      html: "B1 / room 12",
      css: "B1 / room 13",
    };
    return major[prop];
  }
}

class Users extends Frontend {    // frontendni ma'lumotlari usersga o'tib qoladi
//   constructor(name, surname) {
//   this.name = name;
//   this.name = surname;
// }
//   getFullName() {
//     return `${this.name} ${this.surname}`
//   }
}

let Zuhriddin = new Users("Zuhriddin", "Qulmatov");

console.log(Zuhriddin.getSubjects()[1]);
console.log(Zuhriddin.getLocation("html"));
console.log(Zuhriddin.getDuration());


// Prived and Protected

class Users {
  _name;        // public
  #surname;    // prived
  constructor(name, surname) {
    this._name = name;
    this.#surname = surname;
  }
  fullName() {
    return `${this._name} ${this.#surname}`;
  }
}

let usrr1 = new Users("Zuhriddin", "Qulmatov");

console.log(usrr1._name);   // Zuhriddin
console.log(usrr1.surname);  // undefined