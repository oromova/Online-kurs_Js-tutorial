// ======= OBJECT ========

let wba = {
  name: "Webbrain Academy",
  status: "IT center",
  year: 2019,
};

console.log(wba);       // { name: 'Webbrain Academy', status: 'IT center', year: 2019 }

// obyectni ichidagi ma'lumotni ichidagi ma'lumotni olish un . nuqtadan foydalanamiz.

console.log(wba.name);  // Webbrain Academy

// Ma'lumotlarni olishning 2- yo'li - bu dinamic usul yani [] qavslardan foydalanib olamiz

// let wba1 = {
//   'full name': "webbrain academy",
//   year: 2019
// }

// key 2ta so'zdan iborat bo'lsa,ma'lumot olishda [] qavslardan foydalanamiz.
// console.log(wba1['full name']);     // webbrain academy
// console.log(wba1['year']);          // 2- bo'lmaganlarga ham ishlatish mumkin.

// console.log(wba1.age);      // undefined qaytaradi, error bermaydi

// wba1.age = 1234;       // yangi proporty qo'shayapti
// wba1.year = 2020;      // ma'lumotni o'zgartirayapti

// console.log(wba1.age);   // 1234
// console.log(wba1.year);  // 2020

// agar 2ta obyectni taqqoslanayotganda ularni ichidagi ma'lumotlar emas, ularning hotirada joylashgan joyi taqqoslanadi va har doim false qaytaradi.
// lekin,

let wba1 = {
  'full name': "webbrain academy",
  year: 2019
}

let wba2 = wba1;    // bunda wba2 ga wba1dagi ma'lumotlar yozilayapti va bitta joyda joylashayapti

console.log(wba1 === wba2);  

// xohlagan bittasida ma'lumot o'zgarsa ikkalasida ham ma'lumot o'zgaradi.

// valuega qiymat biriktirishda variabledan foydalansak bo'ladi.
// value bn keyni nomi bir xil bo'lsa, bittasini yozish mumkin.

// let title = 'web';
// let year = 2019;
// let web = {
//   name: title,
//   year,
// }

console.log(web);   // { name: 'web', year: 2019 }

// obyectning keyiga ham variable biriktirishimiz mn.
// buning uchun variableni [] qavs ichida yozib ketish kk.

let k = 'name';

let object = {
  [k]: 'web'
}

console.log(object.name);   // web

// ================

let title = 'name';
let year = 2019;

let b = title;

let data = {
  [b]: title,           // name: name,
  status: "IT center",  // status: 'IT center',
  year: year,           // year: 2019,
  title,                // title: name,
  [title]: b,           // yuqorida name: name bor shuning un chiqarmaydi
  b: title,             // b: name
}

console.log(data);      // {
                        //   name: 'name',
                        //   status: 'IT center',
                        //   year: 2019,
                        //   title: 'name',
                        //   b: 'name'
                        // }

let nom = 'name';
let obj = {
  name: 'webbrain',
  nom: "IT center",
  [nom]: "Webbrain Academy",
  nom,
}

console.log(obj[nom]);   // name: 'Webbrain Academy'
console.log(obj.nom);    // nom: name
console.log(obj.name);   // name: 'Webbrain academy'

// in
console.log(nom in obj);   // true   huddi shu nomli key bor youki yo'qligini chiqaradi

// for loop qilsak bo'ladi
for( key in obj) {
  console.log(key);
}                       // objectni aylanib faqat keylarni chiqaradi

