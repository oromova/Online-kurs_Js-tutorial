let str1 = 'Webbrain';
let str2 = 'IT \n "Center"'  // \n yangi qatorga o'tqizadi
let str3 = `wba`
let str4 = "Web\"brain\""    // agar 2ta qo'shtirnoq ishlatmoqchi bo'lsak \\ lar orasiga yozishimiz kk

// console.log(str2);
// console.log(str4);

// STRINGNI INDEXLARIGA ACCESS QILISH
// console.log(str1[1]);         // e
// console.log(str1.charAt(1));  // e
// console.log(str1.at(1));      // e
// console.log(str1[-1]);         // undefined    - lik qiymat berib bo'lmaydi
// console.log(str1.charAt(-1));  // hech narsa chiqarmaydi
// console.log(str1.at(-1));      // n    oxirgi harfni chiqaradi

// // UZUNLIGI
// console.log(str1.length);      // 8 uzunligini chiqaradi

//.toUpperCase .toLowerCase

// indexOf() - string indexini chiqaradi
console.log(str1.indexOf("ra"));   // 4 ra ma'lumoti 4-indexdan boshlab bor shuning uchun 4!
console.log(str1.indexOf('W'));    // 0 

console.log(str1.indexOf('e'));  // 1
console.log(str1.lastIndexOf('e')); // 8 strni oxiridan boshlan e harfini qidiradi va 8ni qaytaradi.

// includes() - ma'lumot bor yo'qligini tekshiradi, faqat bizga true yoki false qaytaradi
console.log(str1.includes('bbrain'));  // true

// endsWith startWith
let name = "webbrain"
let tel = '998933760958'
console.log(tel.startsWith("998"));   // true shu qiymat bn boshlanadini yo'qmi tekshiradi
console.log(tel.endsWith("0958"));   // true rostdan ham shu qiymat bn tugaydimi yoki tekshiradi

// str1.padEnd(count, value)  Ma'lumotni stringni oxiridan qo'shadi
// str1.padStart(count, value) Ma'lumotni string boshidan qo'shadi
// 2ta Parametr qabul qiladi. 1-sida qancha ma'lumot qo'shmoqchimiz, 2-parametrga qanday ma'lumotni qo'shmoqchimiz, shuni yozamiz.

let tel1 = "998335762020";
let tel2 = "335762020";
let tel3 = "998762020";

const getNumber = (num) =>{
  if (num.length >9 ) return num;
  else return  num.padStart(num.length +3, "998");
}

console.log(getNumber(tel1));   // 998998762020
console.log(getNumber(tel2));   // 998998762020
console.log(getNumber(tel3));   // 998998762020

// slice(start, end(not included)), 
// substring(start, end(not included))
// substr(start, length) 
// hammasi stringni kesib olish uchun ishlatiladi.

let str5 = '1234567';
console.log(str5.slice(0));
console.log(str5.substring(0));
console.log(str5.substr(0));        // 3lasi ham 0dan boshlab hamma ma'lumotni kesib olib beradi
// 1ta parametr kiritsak boshlanish joyini ko'rsatadi

console.log(str5.slice(0, 3));      // 123
console.log(str5.substring(0, 3));  // 123
console.log(str5.substr(0, 3));     // 123
// 2ta parametr kiritilsa, 1-si boshlang'ich nuqtasi, 2-si tugash nuqtasi ya'ni qayergacha kesib olsin

console.log(str5.slice(2, 5));      // 345
console.log(str5.substring(2, 5));  // 345
console.log(str5.substr(2, 5));     // 34567
// substrning 2-parametrni nechta ma'lumot kesib olishni anglatadi

console.log(str5.slice(-3, -1));   // 123456
// slice() bilan substringni farqi slice 2-parametrga - qiymat qabul qiladi va u oxiridan boshlab hisoblaydi

// eval() - string ichida matematik amallarni bajaradi.
let st = '12+1+2-4';
console.log(eval(st));   // 11

// str.length - stringni uzunligini chiqaradi, agar bosh joylar bo'lsa ularni ham qo'shib chiqaradi.
// str.trim() - bo'sh joylarni qo'shmasdan faqat stringni uzunligini chiqaradi
// str.trimStart() - boshidagi bo'sh joyni kesib olib tashlaydi
// str.trimEnd() - stringni oxiridagi bo'sh joylarni kesib oladi.

let a = '     webbrain   ';

console.log(a.trim().length);  // 8
console.log(a.trimStart());    // webbrain   
console.log(a.trimEnd());      //     webbrain

// concat()- 2ta stringni bir-biriga qo'shib beradi.

let b = 'webbrain';
console.log(b.concat(' it academy'))  //webbrain it academy

// repeat() - parametrga yozilgancha stringni qo'shib takrorlab yozadi

console.log(b.repeat(5));   // webbrainwebbrainwebbrainwebbrainwebbrain


// SPLIT() - STRINGNI ARRAYGA O'TQIZISH UCHUN ISHLATILADI. PARAMETRDA YOZILGAN QIYMATGA QARAB AGAR U BELGI STRING ICHIDA BO'LSA O'SHA BELGINI KO'RGAN JOYIDAN ARRAY ELEMENT YASAYDI. AGAR U ELM YOQ BO'LSA BITTA UMUMIY ARRAY ELMTI YASAYDI.

let c = '01,02,13,55,34'

let s = c.split(',')
console.log(s);       // [ '01', '02', '13', '55', '34' ]
let g = c.split('-')
console.log(g);       // [ '01,02,13,55,34' ]

let h = '01,02,13,55,34'
console.log(h.split());  // parametrga hech narsa yozilmasa bitta arrayga oladi.
