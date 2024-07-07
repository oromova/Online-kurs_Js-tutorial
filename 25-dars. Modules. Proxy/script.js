let usr = [
  {id: 1, name: 'webbrain'},
  {id: 2, name: 'webbrain'},
  {id: 3, name: 'webbrain'},
  {id: 4, name: 'webbrain'}
];

const getVal = (param) => {
  console.log((param / 100) * 10);
}

export  {usr, getVal};

// =========== Proxy =============

const student = { name: "webbrain", age: 123, password: 23456};

let proxy = new Proxy(student, {

  // get(target, key, ) {
  //   //console.log(target, "tar");
  //   //console.log(key, 'prop');
  //   //if(key === "password") return "no data"
  //   //else target[key]    // keylari qaytadi 
  // },
  // set(target, key, value){
  //   return (target[key] = value);
  //  // target=object, key=name, age..., value = bu dinamic value
  //  // return (target[key] = false)  // bu yerda false static biriktirayapmiz
  // },
  ownKeys(target){
    console.log(target);
    //return target;
    //let res = Object.keys(target).filter((vl)=> vl !== "password")
    //return res
  },
  has (target, key) {
    if (key === "password") return false;
    else return key in target
  }
});

console.log("password" in proxy);   // false

console.log(Object.values(proxy));

proxy.password = 984758
console.log(proxy.password);

// get qilish uchun
//console.log(proxy.name);   // webbrain

// set qilish uchun
//console.log(proxy.name = 'eshmat');
//console.log(proxy);      // { name: 'eshmat', age: 123 }

// loop qilishda obyectning loop keylaridan foydalaniladi
// Object.keys(), Object.values(), Object.entries()

// console.log(Object.values(proxy));   // [ 'webbrain', 123 ]
// console.log(Object.keys(proxy));     // [ 'name', 'age' ]

// has - ya'ni in bn biror key bor yoki yo'qligini tekshiramiz
// console.log("ag" in proxy);      // false
// console.log('name' in proxy);    // true


// get(target, property, reciever)

