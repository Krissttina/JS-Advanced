function extract(arr) {
    let output = [];
    let length = arr.length;
  
    let n = arr[0];
    output.push(n);
  
    for (let i = 0; i < length; i++) {
      let curr = arr.shift();
      let number = arr[0];
  
      if (number > n) {
        n = number;
  
        if (curr <= n) {
          output.push(n);
        }
      }
    }
  
    return output;
  }
  
  console.log(extract([1, 3,8,4,10, 12, 3, 2, 24]));
  