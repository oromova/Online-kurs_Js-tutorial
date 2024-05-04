// ========== Function ===========

let pw = 1234;

console.log(pw);

login();     // function declare qilinishdan oldin call qilayapmiz, hoisting bo'lgani saabli xatosiz ishlaydi 

function login() {
  console.log('yulduz');
}

console.log(1);
login();
console.log(2);
login()

// Hoisting nima?
// hoisting bu - e'lon qilingan o'zgaruvchini kodimizni eng yuqorisiga olib chiqib qo'yishga aytiladi.


// SHADOW VARIABLE NIMA?

let title = 'webbrain';
function login() {
  let title = "webbrain academy";
  console.log('welcome to', title);
}

login()   // welcome to webbrain academy

// shadow variable bu accses qilib bo'lmaydigan variablega aytiladi
// ya'ni yuqoridagi functionda scope ichidagi title ishlatilayapti global title esa shadow variable bo'lib qolayapti

// parametr - o'zgaruvchi ma'lumotlarni ifodalash un parametrlardan foydalanamiz
// parametr - bu huddi variablega o'xshaydi, functioga qiymat biriktiriladi. bu default qiymat bo'lishi mn yoki dinamik qiymat bo'lishi mn.
// parametrlarni bir nechta yozishimiz mn, parametrlar vergul bn ajratiladi.

function parol(password, log) {
  console.log(password, log.toUpperCase());
}

parol(1234, 'web')     // 1234 WEB ixtiyoriy qiymat biriktirishimiz mumkin.

