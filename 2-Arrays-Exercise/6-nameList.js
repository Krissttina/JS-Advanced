function namesList(arr){
  let length = arr.length;
  let sorted = arr.sort((a, b) => a.localeCompare(b));

  for(let i = 0; i < length; i++){
    let print = sorted.shift();
    console.log(`${i+1}.${print}`);
  }
  
}

namesList(["John",

"Bob",

"Christina",

"Ema"]);