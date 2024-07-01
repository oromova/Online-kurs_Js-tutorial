// setTimeout | setInterval

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// console.log(3);

// console qanday ketma ketlikda chiqadi?

console.log(1);

setTimeout(() => {
  console.log(4);
}, 2000)

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);       // 1 3 2 4  chiqadi setTimeout(2)ning vaqtida 0 turgan bo'lsa ham qyu o'tqizib qo'ygani sababli 3dan kn chiqadi

// bu misoldachi?
console.log(1);

const get = () => {
  for(let i = 0; i <= 1000; i++) {
    console.log(4);
  }
}
get()

setTimeout(() => {
  console.log(2);
},0);

console.log(3);       // 1 4 3 2 chunki funcsiya ham huddi consoledek srazu ishlidi ichida loop bo'lsa ham

// setInterval - berilgan vaqt ichida setInterval qayta qayta ishlaydi

setInterval(() => {
  let date = new Date();
  console.log(
    `Today: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  );
}, 1000);



let id = setInterval(() => {
  let date = new Date();
  console.log(
    `Today: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  );
}, 1000);

clearInterval(id) // setIntervalni to'xtatadi shu orqali garbage collectionga o'tqizib qo'yamiz

clearTimeout() // - setTimeoutni to'xtatadi



// Masala

sum(1)(2) // 1+2=3
sum(1)(2)(3) // 1+2+3= 6
sum(5)(-1)(2) // 6
sum(0)(1)(2)(3)(4)(5)

let sum = (a) => {
  return (num) => {
    console.log(a + Number(`${num}`));
  }
}
sum(5)(-3)