// Scopes, Closure
// Scope - faqat ozini scopelari ichida ishlashiga aytilar

{
  let b = 'wba'
}

console.log(b);  // o'zini scopedan tashqarida o'qimayapdi

for ( let i = 0; i < 10; i++){
  console.log(i);
}
console.log(i);

// Lexical Environment - ham o'zini ham tashqaridagi variable accses qilaolishiga aytiladi 
// 1. local memory  2. reference to outer lexical environment

let name = "webbrain";

function getName() {
  let b = "wba"
  console.log(name);
  return function(){
    console.log(name, b);
  }
}

// Closure - bu funcksiya outer variableni ishlatishiga aytiladi

function outer() {
  let n = 'wba';
  return function() {
    console.log(n);   // o'zini scopedan tashqaridagi variableni ishlatayapti 
  }
}
outer()()

// garbage collection - lexical environment is removed  after function call ends.




