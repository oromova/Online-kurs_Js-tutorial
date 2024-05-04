// ========= 4-lesson For loop ========

// let i = 1;
// let str = 'Webbrain';

// for (i; i < 8; i = i + 1) {
//   console.log(str[i]);      // str bo'yicha aylanadi
//   console.log(str[i], i);   // 2ta bir xil console yozilsa ma'lumotlarni 2tadan chiqaradi alohida emas
// }

// Masala: Sonni juft qiymatlarini toping.

i = 0;

for (i; i < 8; i = i + 1) {
  // case 1
  // if (i % 2 === 0) {
  //   console.log("juft");
  // } else {
  //   console.log("toq son");
  // }
  // case 2 
  i % 2 === 0 ? console.log("juft") : console.log("toq son");

  // case 3
  console.log(i % 2 ? "juft" : "toq son");   // qisqa yozuv

  // case 4
  console.log(4 % 2 ? "juft" : "toq son");
}

let i = 1;

for (i; i <= 10; i = i + 1 ) {
  console.log(i % 3 ? "juft" : "toq son");
}

// 1 % 3 = 1 / juft / true bo'ganligi uchun
// 2 % 3 = 2 / juft
// 3 % 3 = 0 / toq son
// 4 % 3 = 1 /juft
// 5 % 3 = 2 /juft
// 6 % 3 = toq
// 7 % 3 = juft
// 8 % 3 = juft
// 9 % 3 = toq
// 10 % 3 = juft

