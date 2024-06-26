let i = 1;
function pow(x, y) {
  // let res = 1;
  // for (let i = 0; i < y; i++) {
  //   res *= x;
  // }
  // console.log(res);
  // return res;
  console.log(i++);
  if(y == 1)
    return x;
  else return x * pow(x, y - 1)
}

console.log(pow(2, 3));

// Recurtion functionda har doim aniq bir to'xtash nuqtasini berishimiz kk.
