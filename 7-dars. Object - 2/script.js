// ======= OBJECT 2 ========

// let wba = {
//   name: "webbrain",
//   title: "IT center",
// }

// let wba2 = structuredClone(wba) 
// // structuredClone() bir-biriga bog'liq bo'lmagan holda copyyasini oladi.

// wba2.name = "WBA";

// console.log(wba);   // { name: 'webbrain', title: 'IT center' }
// console.log(wba2);  // { name: 'WBA', title: 'IT center' }

// OBJECT.ASSIGN()

// let wba = {
//   name: "webbrain",
//   title: "IT Center",
// };

// let wba2 = {};
// // Object.assign(qaysi obyetga qo'shmoqchimiz, qaysi obyektni qo'shmoqchimiz yoki ma'lumotni)
// console.log(Object.assign(wba2, wba));

// Obyectning ichida function ma'lumotlari:

// let obj = {
//   name: 'webbrain',
//   surname: 'academy',
//   title: "IT center",
//   // fullName: function(){}
//   // fullName: ()=>{}
//   fullName(){
//     console.log(this.name, this.surname);   // har doim this kalit so'zi bilan ishlatamiz.
//   }
// }

// OBYECTNI ICHIDA YOZILGAN ARROW FUNCTIONDA this ISHLAMAYDI!!!

let obj = {
  name: 'webbrain',
  surname: "academy",
  title: "IT center",
  fullName(){
    // return `${this.name}, ${this.surname}`;
    console.log(this.name, this.surname);
  },
  full(){
    console.log(obj.name, obj.surname);
  },
};

let user = obj;

// user.fullName();
// user.full()

obj = null;
console.log(user);

// GARBAGE COLLECTION -  BU MEMORYDA QAYTA OLIB BO'LMAYDIGAN MA'LUMOTIMIZGA AYTILADI, YA'NI OBJ NULLGA TENGLANGANDA JS UNI O'CHIRIB YUBORADI VA MUSORGA TASHIDI.

// NEGA this keywordini ishlatish maqsadga muvofiq?
// chunki agar keyinchalik obyect nullga tenglanadigan bo'lsa va u obyektning boshqa bir obyectga copyyasi olingan bo'lsa, this bn emas obyectni nomi bn ma'lumot chaqiriladigan bo'lsa, typeError beradi.


// OPTIONAL CHAINING NIMA? 
// agar obj.dan ma'lumot kelmay qolishi mumkinligini bilsak, unda nuqtadan keyin ? qo'yib ketamiz shunda obyectimizdan error bermaydi.

let object;
let sym = Symbol();

console.log(object?.name);
console.log('finished');

object = {
  name: "webbrain",
  surname: "academy",
  title: "it center",
  [sym]: '23456',
  sym: 'asdfg',
};

console.log(object.sym, 'key');
console.log(object[sym], 'symbol');

// Object.keys, Object.values, Object.entries

let key = {
  name: "webbrain",
  age: 5,
  child: {title: 'child'},
};

// console.log(Object.keys(key));     // [ 'name', 'age', 'child' ]
// console.log(Object.values(key));  // [ 'webbrain', 5, { title: 'child' } ]
console.log(Object.entries(key));    // [
                                    //   [ 'name', 'webbrain' ],
                                    //   [ 'age', 5 ],
                                   //   [ 'child', { title: 'child' } ]
                                    // ]


console.log(Object.key(key).length); // keylarni uzunligini chiqaradi

let a = {
  name: 'web',
  surname: "academy",
}

let surname = "IT Center";

function update() {
  Object.assign(a, {surname});
}

update();
console.log(obj);

// Speread operatori - Yoyish amali. 

let objj = {
  name: "webbrain",
  surname: 'academy',
};
let surename = "it center"

//console.log({ objj });    // {objj:objj}  { objj: { name: 'webbrain', surname: 'academy' } }
//console.log({ ...objj});   // { name: 'webbrain', surname: 'academy' }
console.log({ ...objj, surname});  // surname:surname

// agar {obj} deb yozilsa, bu degani {obj:obj} ya'ni consoleda {obj: {name: "webbrain", surname: 'academy}}

let b = {
  name: 'webbrain',
  familiya: 'academy',
};

let familiya = "IT Center";
console.log({familiya, ...b});  // { familiya: 'academy', name: 'webbrain' }
// bu degani:
// {
//  familiya: "IT centerni",
//  name: webbrain,
//  familiya: 'academy',
// }
// shuning uchu acedemy ichiqayapti va ustidan yozib yuborayapti
