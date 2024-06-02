// distructure - array va obyectlarga nisbatan ishlatiladi.

let obj = { name: "webbrain", age: 123, info: { name: "wba", age: 24 } };

const {
  name: newName,
  info: { name, age: age },
} = obj;

//console.log(newName, name, age);    // webbrain wba 24

// ...spreed operatori orqali distructure

let obj2 = { ...obj };
console.log(obj2); // { name: 'webbrain', age: 123, info: { name: 'wba', age: 24 } }
let obj3 = { obj: obj }; // = obj3 = {obj}
console.log(obj3); // { obj: { name: 'webbrain', age: 123, info: { name: 'wba', age: 24 } } }


// array distructure

let arr = ["apple", "orange", "kiwi"];
//let ar = { ...obj, arr };

//console.log(ar);      // {
                      //  name: 'webbrain',
                      //  age: 123,
                      //  info: { name: 'wba', age: 24 },
                      //  arr: [ 'apple', 'orange', 'kiwi' ]
                      // }


let [uch] = arr;
let [, , kiwi] = arr
console.log(uch);      // apple
console.log(kiwi);     // kiwi

console.log(...arr);   // apple orange kiwi
console.log([...arr, "grape"]);   // [ 'apple', 'orange', 'kiwi', 'grape' ]
// yangi array yasash uchun qo'l keladi


// new Date() - javascriptning building funksiyasi biz qo'shimcha hech narsa yozishimiz shart emas.

let date = new Date()
console.log(date);                  // 2024-06-02T20:02:42.202Z hozirgi current vaqtni chiqaradi
console.log(date.getFullYear());    // 2024
console.log(date.getMonth());       // 5  0dan boshlanadi
console.log(date.getDate());        // 2-sana
console.log(date.getDay());         // 0 - Yakshanba
console.log(date.getHours());       // 23
console.log(date.getMinutes());     // 8
console.log(date.getSeconds());     // 43
console.log(date.getMilliseconds()); // 360









 