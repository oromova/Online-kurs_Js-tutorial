// // Advanced functions | call, apply, bind

const user = [
  {
    name: 'webbrian',
    lastname: 'academy',
    title: "It center"
  },
  {
    name: "Digital",
    lastname: 'One',
    title: "It Center"
  },
];

function getFull(a) {
  console.log(`${this.name} ${this.lastname}`);
}

// getFull.call({name: "webbrain", lastname:"academy"})

// // for (let usr of user) {
// //   getFull.call(usr);
// // }

// // apply bn call parametr qabul qiladigan joyida farq qiladi
// // callga , vergul bilan agrument yozib ketamiz


getFull.call(user, 'eshmat', 'toshmat');
getFull.apply(user, ["eshmat", "toshmat", 'aply'])


getFull.call(user)