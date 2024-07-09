// ========== DOM ============
// Document Object Module

const byTag = document.getElementsByTagName("body")
const byId = document.getElementById('title')
const byClass = document.getElementsByClassName('subtitle')
const child = document.getElementById('child')
const btn = document.getElementById('btn')
const eventt = document.querySelector('.event')

//console.log(byClass);  

// tag name va class name bn olganda HTMLCollection qaytadi shuning uchun aynan bitta elmni olish uchun index orqali chaqirish kk
//console.log(byClass[0]);

byId.innerHTML = `<h1> Hello world <h1>`
console.log(byId.parentElement);  // ota elemntga accses qilish
console.log(byId.parentNode);  // ota elemntga accses qilish

// querySelector("#id"), ('.class') ('tag')

//byId.setAttribute('class', 'border')
//console.log(byId.getAttribute('class'));

// ============ event ===========
// 1-usul

// btn.onclick = function () {
//   if (byId.hasAttribute('class')){
//     byId.removeAttribute('class')
//   } else {
//     byId.setAttribute("class", 'border');
//   }
// }

// 2-usul
// function setBorder() {
//   if (byId.hasAttribute('class')){
//     byId.removeAttribute('class')
//   } else {
//     byId.setAttribute("class", 'border');
//   }
// }

// 3-usul classList bilan

// function setBorder() {
//   // if (byId.classList.contains('border')){
//   //   byId.classList.remove('border')
//   // } else {
//   //   byId.classList.add('border');
//   // }
//   byId.classList.toggle('border')
// }

// =========== createElement =============
const text = document.createElement('h1')

text.innerText = 'Hello from DOM'

// ========== Insertion ===========
// node.append() - yuqoridan
// node.prepend() - pastdan
// node.before() - divni yuqorisidan
// node.after() - divni pastidan 
// node.replace() - almashtirish

function setBorder(){
  byId.classList.add('border')
  byId.append(text)
  byId.prepend(text)  
  byId.before(text)    // divni tashqari tepasidan ma'lumot set qiladi
  byId.after(text)     // divni tashqari pastidan set qiladi
}

// ============ Event ==========

eventt.onmousemove = function (event) {
  console.log(event.x, event.y);
  eventt.style.background = `rgb(${event.x}, ${event.y}, ${event.x})`
}