let a = 10_000_000_000;   // ko'rishga qulay bo'lishi uchun
console.log(a + 1);       // 10000000001

let b = '12';
let c = '12a';
console.log();

// stringdagi yoki boshqa data typedagi ma'lumotlarni numberga convert qiladigan metodlar bor . BUlar:
console.log(Number(a));  // 10000000
console.log(Number(b));  // 12
console.log(Number(c));  // NaN

// Number() metogi number yoki number emasligini tekshiradi. number bo'lmasa, NaN qaytaradi.

let f = '1.2'
console.log(Number.parseInt(a));     // 10000000000
console.log(Number.parseInt(b));     // 12
console.log(Number.parseInt(c));     // 12 
console.log(Number.parseInt(f));     // 1

// parseInt - sonni butun qismini qaytaradi.

// String bn number qo'shilsa stringga convert bo'ladi va sonlar qo'shilganda quyidagicha jb chiqaradi.
console.log(10 + b)        // 1012 string

// 10000000 = 10e6  e-nechta nol borligini ifodalaydi
// let f = 1e-4   // 0.0001

// hexadecimal asosan colorlarni ifodalash uchun ishlatiladi. 

// console.log(parseInt(1.5))
// console.log(parseFloat(1.6));

// BINARY
console.log(parseInt('101', 2));   // 5 10lik sanoq sistemasiga o'tqizadi.

let g = 2;
console.log(g.toString(2));      // 10

// Math
let a1 = 1.2;
let b1 = -5;

console.log(Math.PI);            // 3.14
console.log(Math.abs(b1));       // 5
console.log(Math.round(1.2));    // 1
console.log(Math.round(1.5));    // 2
console.log(Math.round(1.7));    // 2
console.log(Math.floor(1.2));    // 1
console.log(Math.floor(1.5));    // 1
console.log(Math.floor(1.7));    // 1    har doim eng pastgi qiymatiga qarab yaxlitlaydi
console.log(Math.ceil(1.999));    // 2
console.log(Math.ceil(1.5));      // 2
console.log(Math.ceil(1.001));    // 2    ceil-potolog degani har doim raqamni yuqori qiymatga qarab yaxlitlaydi
console.log(Math.floor(1.999));    // 1
console.log(Math.trunc(1.999));    // 1
console.log(Math.floor(-1.999));   // -2   sonni pastga qarab yaxlitlaydi, -2 -1dan kichkina
console.log(Math.trunc(-1.999));   // -1 
console.log(Math.random());        // 0dan 1gacha ixtiyoriy raqam chiqaradi.
console.log(Math.min(1,2,3,4,5));  // 1 eng kichkinasini
console.log(Math.max(1,2,3,4,5));  // 5 eng kattasini
console.log(Math.pow(5,2));        // 25 darajaga ko'taradi
console.log(Math.sign(-5));       // musbat, manfiy yoki 0 ekanligini ko'rsatadi. 1, -1, 0 qiymat qaytaradi
console.log(Math.sqrt(4));       // 2  ildiz ostidagi sonni chiqaradi
console.log(Math.cbrt(125));  // 5  sonning kubini chiqaradi

// METHODS

let v = 3.3333333;
console.log(v.toFixed(2));      // 3.33 nechta songacha qisqartirishni ko'rsatishimiz mumkin.

console.log(v.toPrecision(3));   // 3.33
console.log(v.toPrecision(1));   // 3
// parametrga nechchi son yozilsa kasr sonni oshancha qiymatini ko'rsatadi, agar yozilmasa sonni o'zini ko'rsatadi.
 


