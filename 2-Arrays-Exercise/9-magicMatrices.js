function magicMatrices(arr) {
  let horizontal = [];
  let vertical = [];
  let horSubArr = 0;
  let hor = 0;
  let ver = 0;
  let isEqual = true;

  for (let i = 0; i < 3; i++) {
    //namirane na sbor na masiv
    let subArr = arr[i];
    let sum = subArr.reduce((acumulator, m) => acumulator + m);
    vertical.push(sum);
    //namirane na sbor na elementi ot masivite
    for (let index = 0; index < 3; index++) {
      horSubArr += arr[index][i];
    }

    horizontal.push(horSubArr);
    horSubArr = 0;

    //ver = vertical.reduce((ac, l) => ac + l);
    //hor = horizontal.reduce((acum, k) => acum + k);

    if(vertical[i] !== horizontal[i]){
        isEqual = false;
    }
  }

    if (isEqual) {
    console.log("true");
  } else {
    console.log("false");
  }
  
    //console.log(vertical + " - " + ver);
    //console.log(horizontal + " - " + hor);
}

magicMatrices([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]]);
