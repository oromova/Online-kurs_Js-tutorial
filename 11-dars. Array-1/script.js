let wba = { name: "webbrain", title: "IT Center", age: 4 };
let pdp = { name: "PDP", title: "IT Center", age: 4 };
let nt = { name: "Najot ta'lim", title: "IT Center", age: 4 };

let data = [wba, pdp, nt];
data[3] = {}; // yangi ma'lumot qo'shish
data[13] = {};
console.log(data.length); // 14

let ar = [1, 2, 3];
let temp = 1.1;
console.log(parseInt(temp)); //numberning metodini ishlatayapmiz
console.log(data[0].name);

let a = [{ name: "wba" }, 2, [5, 6, 7]];
console.log(a[0]); // {name: "wba"}
console.log(a[1]); // 2
console.log(a[3]); // [5, 6, 7]
//chiqayotgan natijalarimizni typega qarab metod ishlatishimiz mumkin, masalan obyekt kelsa obyectga aloqador, array kelsa arrayni metodlarini ishlatamiz
console.log(a[2][0]); // 5

// new Array() - old way
let b = new Array("apple", "orange", "kiwi");

console.log(b); // [ 'apple', 'orange', 'kiwi' ]

let c = new Array(4);
console.log(c); // [ <4 empty items> ]

// ARRAY USTIDA AMALLAR

let arr = [1, 2, 3, 4];
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(arr.toString()); // 1,2,3,4   stringga o'tqizayapti

// ARRAYNI TYPENI TEKSHIRISH UCHUN... Array.isArray dan foydalanamiz
console.log(Array.isArray(arr)); // true

// COMPARISION - TAQQOSLASH
// [] == 0 -- true
// [] == '0' -- false

// '' == 0 - true
// '' == '0' - false

// LOOPS

let array = ["apple", "orange", "kiwi"];

for (let i = 0; i < array.length; i++) {
  console.log(array, array[i]);
}

// for(i of array) - of arrayni valuelarini qaytaradi
// for(i in array) - in arrayni indexlarini qaytaradi

// forEach()
// let str = ['apple', 'orange', 'kiwi'];
let num = [21, 1, 2, 3, 52, 1, 20];

let academy = [{ name: "Webbrain", title: "it center" }];

let data = document.getElementById("data");
data.innerHTML = academy;

let str = ["apple", "orange", "kiwi"];
str.forEach((value, index, array) => {
  console.log(value, index); // apple 0 orange 1 kiwi 2
});

// parametrga xohlagan nom berish mumkin, 1-parametr har doim = valuega 2- parametr ham doim = indexga

// forEach() - parametrlari ichida ham dor of ham for inni saqlaydi.
// forEach(eshmat, toshmat) -> eshmat=value, toshmat=index

let sum = 0;
num.forEach((val) => {
  console.log((sum += val));
  data.innerHTML = data.innerHtml + ` <mark> ${sum}</mark>`;
});

let arrr = [1, 2, 3, 4, 5];
// console.log(arrr.splice(0,2));   // [1, 2]
// console.log(arrr);               // [3, 4, 5]

//console.log(arrr.slice(0, 3));   // [1, 2, 3 ]
console.log(arrr.indexOf(4)); // 3

// indexni topish metodi juda qulay u yordamida kerakli qiymatni indexni topib kn o'xhirib tashlashimiz mumkin.
//console.log(arrr.splice(arrr.indexOf(3), 1));
//console.log(arrr);    // [1, 2, 4, 5]

// lastIndexOf() - arrayni oxirida ma'lumotni qidiradi

// console.log(arrr.splice(2, 1, 33));
// console.log(arrr);                   // [ 1, 2, 33, 4, 5 ]

// splicening update xususiyati ham bor
console.log(arrr.splice(2, 0, 33));
console.log(arrr); // [ 1, 2, 33, 3, 4, 5 ]

// reverse - arrayni teskarisiga o'zgartiradi
// join('') - parametridagi belgiga qarab stringga o'giradi
//

// map()
let number = [21, 1, 2, 3, 52, 1, 20];

let map = number.map((val, ind) => val + 1);
let foreach = number.forEach((val, ind) => val + 1);

console.log(map);  //  [22, 2,  3, 4, 53, 2, 21] returnga qaytadi va yangi qiymat qaytaradi
console.log(foreach);  // undefined qaytaradi

