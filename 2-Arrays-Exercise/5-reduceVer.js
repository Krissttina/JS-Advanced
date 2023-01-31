function extract(arr) {
    let output = [];
    let length = arr.length;
    let m = [];
  
    for (let i = 0; i < length; i++) {
      m = arr.reduce((acumulator, curr) => acumulator >= curr);
    }
  
    console.log(m);
  }
  
  extract([1,
  
      3,
      
      8,
      
      4,10, 12, 3, 2, 24]);
  