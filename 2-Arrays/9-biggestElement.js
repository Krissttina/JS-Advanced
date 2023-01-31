function biggestElement(arr){
    let result = [];

    let finIndex = arr.length;
    for(let i = 0; i < finIndex; i++){
        arr[i].sort((a, b) => a - b);
        result.push(arr[i][finIndex]);
    }
    let output = result.sort((a, b) => a - b).at(-1);
    
    return output;
}

console.log(biggestElement([[20, 50, 10],

    [8, 33, 15]]));