function biggerHalf(input){
    input.sort((a,b) => a -b);
    const start = Math.floor(input.length / 2);
    const result = [];

    for (let index = start; index < input.length; index++) {
        result.push(input[index]);
    }
    return result;
}

console.log(biggerHalf([4, 7, 2, 5]));