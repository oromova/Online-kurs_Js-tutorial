//JSON | new Map(), new Set(), weakMap(), weakSet()

// Map - the same as Objects - let map new Map()
// Map vs Ovject - Map keys any type (boolean, null, number in obj undefined)
// map.set(key, value) - mapga ma'lumot kiritish un ishlatamiz
// map.get(key) - ma'lumotni olish un ishlatamiz
// map.delete(key) - key va valueni o'chirishga xizmat qiladi
// map.clear() - mapni hamma qiymatlarini o'chiradi

// ITERATION in Map:
// map.keys() - keylarni qaytaradi
// map.values() - valuelarini qaytaradi
// map.entries() - returns [key, value]


// let obj = {
//   name: "webbrain",
//   age: 123,
// };

// console.log(obj);
// console.log(JSON.stringify(obj));

let map = new Map(); 
map.set('name', 'webbrain');     // ma'lumot qo'shish uchun
console.log(map.get('name'));    // ma'lumotni olish uchun
// default qiymat biriktirib bo'lmaydi set bn qo'shamiz

map.clear()
console.log(map);

// WeakSet() - faqat non primitive ma'lumotlarni biriktrolamiz
let weakMap = new WeakMap()  // srazu garbage collection ishlaydi
let fun = () => {}
weakMap.set(fun, "webbrain");
console.log(weakMap);

let map1 = new Map()
let set = new Set();
let weakset = new WeakSet();

set.add('webbrain');
map1.set("name", "webbrain");

console.log(map1.get("name"));
console.log(set.has("webbrain"));     // bor yoki yo'qligini ko'rsatadi
console.log(set.has("webbrain") && "webbrain"); // webbrain bor b o'lsa webbrain deb chiqar deymiz real caselarda chunki has true yoki false qaytaradi.


// duplicate ma'lumotlarni o'chirish uchun ishlatsak bo'ladi.
let ar = [1, 2, 3, 4, 5, 3, 2, 222];

let set1 = new Set(ar);
let weaksett = new WeakSet();

console.log(set);
 





