// flatMap - ham flat ham ham map vazifasini bajaradi, callback qabul qiladi.
// flat qavslardan chiqaradigan bo'lsa, map ham return qiladi ham loop qiladi
// flatMap() da infinity ishlamaydi

let num = [1, 2, [3, 4, [5, 6]], 7];

console.log(num.flatMap((val) => val)); // [ 1, 2, 3, 4, [ 5, 6 ], 7 ]
console.log(num.flatMap((val) => 1)); // [ 1, 1, 1, 1 ]  loop qilib aylanib nechta array elm bo'lsa shuncha 1 qaytarayapti

// Array.from() - parametrida berilgan ma'lumot ustida qo'shimcha amal bajarishga yordam beradi. string yoki array qabul qiladi. shu stringdan array element yasab beradi.
// 2-parametri callback parametr huddi mapdek loop qilib beradi

console.log(Array.from("webbrain"));
console.log(Array.from("webbrain", (val) => val.toUpperCase()));

console.log(Array.from([2, 3, 4], (val) => val * 2)); // [4, 6, 8]

let start = 5;
let stop = 10;
let step = 2;

let ar = Array.from(
  { length: (stop - start) / step + 1 },
  (_, i) => start + i + step
);
console.log(ar); // [ 7, 8, 9 ]

// reduce

// let n = [1, 2, 3, 4, 5]

// let sum = 0;
// n.forEach((val) => (sum += val));

// let res = n.reduce((sum, val) => {
//   console.log(sum, val);
//   return val;   // reduce nimaga return qilsa shu qiymat chiqadi
// }, 'web')

// console.log(res);

let n = [1, 2, 3, 4, 5];

let res = n.reduce((sum, val) => {
  console.log(sum, val);
  return sum + val; // reduce nimaga return qilsa shu qiymat chiqadi
}, 0);

console.log(res);

// CRUD
// read-o'qish un mapdan foydalanamiz. filterdan ham foydalansak bo'ladi
// read - filter, sort, includes, find
let users = [
  { id: 1, year: 1998, engine: 1, name: "Tico" },
  { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
  { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, year: 1200, engine: 1.5, name: "Cobalt" },
  { id: 5, year: 2012, engine: 2, name: "Malibu" },
  { id: 6, year: 2018, engine: 1.2, name: "Damas" },
];

let data = document.getElementById("data");

// users.map((val) => (data.innerHTML += `<h1>${val.name}`));

// let ress = users.filter((val) => val.year > 2000);
// ress.map((val) => (data.innerHTML += `<h1>${val.name}-${val.year}</h1>`));

// create - yangi ma'lumot qo'shish.
let onix = { id: 8, year: 2023, engine: 2, name: "Onix" };

let res1 = [...users, onix];
// res1.map((val) => (data.innerHTML += `<h1>${val.name}`));

// delete - filter & splice - idisi yordamida delete qilamiz
let res2 = users.filter((val) => val.id !== 5);
// res2.map((val) => (data.innerHTML += `<h1>${val.name}`));


// update - filter, find

let res3 = users.map((val) => (val.id === 4 ? {...val, year: 2002} : val))

res3.map((val) => (data.innerHTML += `<h1>${val.name} - ${val.year}`));
