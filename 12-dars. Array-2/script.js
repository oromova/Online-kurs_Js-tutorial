// ARRAY ADVANCED

let str = ["Orange", "apple", "kiwi"];
console.log(str.sort());
// agar hamma harflar bir xil katta yoki kichik harflar bn boshlansa sort metodi to'g'ri ishlaydi. Agar katta harflarda bo'lsa ASCII code bo'yicha solishtiradi va xato sort qilishi mumkin.

let num = [1, 4, 7, 5, 8, 2];
console.log();

console.log("a".localeCompare("a")); // 0 -
console.log("a".localeCompare("b")); // -1
console.log("b".localeCompare("a")); // 1

// localCompare ASCII tablega qarab solishtiradi agar qaytarsa teng, agar 1 qaytarsa o'zidan katta agar -1 bo'lsa AsCII tabledagi qiymati kichik degani
// console.log(str.sort((a,b) => {
//   return a.localeCompare(b);     // [ 'apple', 'kiwi', 'Orange' ]
// }));

// filter((val, indx) =>) - truega qaytgan ma'lumotlarni chiqaradi

let n = [3, 4, 5, 2, 3, 6, 3];
console.log(n.filter((val) => val === 3)); // [3, 3, 3]
console.log(n.filter((val) => val !== 3)); // [ 4, 5, 2, 6 ]

let m = [3, 2, 0, 3, 4];
//console.log(m.filter((val, ind)=> ind));   // [ 2, 0, 3, 4 ]\
// bu yerda indexlari bo'yicha loop qiladi, [0] indexni chiqarmaydi chunki u 0 bo'lgani uchun.
// 0 false qiymat qaytaradi filter esa faqat truega qaytgan qiymatlarni chiqaradi.

// find((val, ind) => 1))- find ixtiyoriy bitta qiymatni qidiradi. filter loopga o'xshab hamma ma'lumotni tekshirib chiqsa, find kerakli ma'lumotni topgandan kn to'xtaydi.
//console.log(m.find((val, ind) => val === 0));   // 0
console.log(
  m.find((val, ind) => {
    console.log(ind); // 0 1 2 aylanayapti
    return val === 0; // va 0ni ko'rganda to'xtayapti
  })
);

// findIndex(()) - indexini qaytaradi.
let b = [1, 2, 0, 3, 5];

console.log(
  b.findIndex((val, ind) => {
    return val === 3;
  })
); // 3 indexda deb chiqarib beradi

// findLastIndex() - ma'lumotni oxiridan boshlab qidiradi

// every() - har bitta ma'lumotni shartga to'g'ri keladimi yoki tekshiradi ln bittasi ham false qaytarsa false qaytaradi.

let a = [1, 2, 3, 4, 5];
console.log(a.every((val, i) => val > 0)); //  true
console.log(a.some((val, i) => val < 0)); //chunki kichkinasi yo'q

// some() - birortasi shartga to'g'ri kelsa bo'ldi true qaytaradi

// fill() - to'ldirish
let f = [1, 2, 3, 4, 5];
console.log(f.fill(0, 2, 4)); //[ 1, 2, 0, 0, 5 ]
// 2-indexdan 4-indexgacha 0 bilan to'ldir deyilayapti
console.log(f.copyWithin(0, 1, 3)); // bu yerda 0-indexga 1dan 3indexgacha qiymatni 0-indexga o'tqizish aytilyapti

// copyWithin()-aynan o'sha arrayni qiymatlardan foydalanib arrayni qiymatlarini o'zgartiradi

// flat()- ichma ich kelgan arraylarni parametrda berilgan songa qarab parentdan chiqaradi. agar parametrga Infinity yozsak hamma parentlardan chiqaradui
let c = [12, [3], 4, 5, [67, [5, [7]]]];
console.log(c.flat(1)); // [ 12, 3, 4, 5, 67, [ 5, [ 7 ] ] ]

console.log(c.flat(Infinity)); // [12, 3, 4, 5, 67, 5, 7 ]

// reduce() - returnga nima qaytsa shuni qaytaradi. qiymat qaytaradi. 1-si callback bo'lsa, 2-si boshlang'ich qiymat.

let n1 = [1, 2, 3, 4, 5];

// let res = n1.reduce((sum, current, i) => {
//   console.log(i, sum, i - sum);
//   return i - sum;
// }, 0) // 0 - bu boshlang'ich qiymat

// console.log(res); // 2

// let res = n1.reduce((sum, current, i) => {
//   console.log(current, i, current - i);
//   return current - i; // current - bu arrayning qiymatlari
// }, 0); // 0 - bu boshlang'ich qiymat

// console.log(res);    // 1

let res = n1.reduce((sum, current, i) => {
  console.log(sum, i, sum - i);
  return (sum = current - i); // current - bu arrayning qiymatlari
}, 0); // 0 - bu boshlang'ich qiymat

console.log(res); // 1

let g = [1, [2, 3, [4, [5]]]];

console.log(g.flat(Infinity).reduce((s, c) => s + c, 0)); //15
