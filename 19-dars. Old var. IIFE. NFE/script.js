// IIFE - Immediately invoked function expression

var a = 10;
console.log(a);         // 10
(function () {
  var a = 30;
  console.log(a);       // 30
})();

console.log(a);         // 10

// IIFE ni maqsadi scope yaratib olish tashqaridagi
// varablelarni ishlatmasdan faqat local scopedagi o'zgaruvchini ishlatish un ishlatilgan.
// varni muammosi let bn yechilgandan kn o'zidan o'zi IIFE ham ishlatilmay ketgan

// Global Object - window, globalThis-brauserda, global-node.js

// hamma joyda globalda ham localda ham access qilishni hohlasak globalThis ishlatsak bo'ladi

globalThis.a = 10;


function test() {
  console.log('hey js');
}

console.log(test.name);  // test funksiyani nomini chiqaradi
console.log(test.length); // funksiyani parametrlar uzunligini chiqaradi

// NFE - Named Function Expression - bu functiondan maqsad nima?
// functionga nom berishdan maqsad uni shu functionni ichida qayta qayta chaqirish un ishlatiladi
// faqat function scopeni ichida ishlaydi xolos
// recursionga o'xshidi

const getName = function callback(name) {
  console.log(`hi, ${name}`);
  return callback();
};

// new Function ham bugungi kunda ishlatilmaydi
// functionni constructori

let getNamee = new Function(console.log('hey'))  // function yasab beradi

console.log(getNamee()) // 'hey'

