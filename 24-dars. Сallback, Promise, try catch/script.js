// CALLBACK
// callback - bu bir functionni parametrida boshqa bir functionni kelishiga aytiladi.

console.log('started');

function getData(login, password, callback) {
  setTimeout(() => {
    if(login === "webbrain" && password === 12345) {
      return callback("welcome to github");
    }
  }, 1000)
}

getData("webbrain", 12345, function (res){
  console.log(res, "finished");
});

const myFunc = (callbackFunc) => {
  let number = 50
  callbackFunc(number)
}
myFunc(function(value){
  console.log(value);
})


// PROMISE

let login = 'webbrain'
let pw = 123;

const promise = new Promise((resolve, reject)=>{
  if (login === 'webbrain' && pw === 12345) {
    resolve("Welcome to github");
  } else reject("login yoki pw xato");
});

// promise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally"));

// async awaite bn ham bajarishimiz mumkin.

async function getData() {
  console.log("started");
  let promise = await getPromise();
  console.log(promise);

  console.log("finished");
}

getData();

// =============== TRY CATCH - err, error.message, error.name,

try {
  console.log(title);
} catch (err) {
  console.log(err.name);
}
console.log("working");

age = 96
try {
  if (age < 18) throw "You're too young"
  if (age > 95) throw "You're too old"
}
catch(err) {
  console.log(err);
}

// =============== GENERATOR FUNCTION ===========

function* generator() {
  yield 12;
  yield 13;
  yield 14;
}

const counter = generator()   // ishlatish uchun bitta o'zgaruvchiga olish kk
console.log(counter.next());  // { value: 12, done: false }
console.log(counter.next());  // { value: 13, done: false }
console.log(counter.next());  // { value: 14, done: false }
console.log(counter.next());  // { value: undefined, done: true }


function* gen() {
  let count = 1;
  while (true) {
    yield count++;
  }
}

const count = gen()
console.log(count.next());    // codeni yurgizadi value qaytaradi
console.log(count.return());  // shu joyga code yuradi keyingilarida value qaytarmadi
console.log(count.throw());   // shu joygacha yuradi kn error beradi va qogan codelar yurmaydi



