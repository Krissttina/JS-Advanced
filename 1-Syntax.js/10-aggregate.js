function aggregate(inputArr){
    let sum = 0;
    let newArr = [];
    let result = 0;

    for(let i = 0; i < inputArr.length; i ++){
        sum += inputArr[i];
    }
    console.log(sum);

    for(let m = 0; m < inputArr.length; m ++){
        let num = 1 / inputArr[m];
        result += num;
    }
    console.log(result);

    for(let j = 0; j < inputArr.length; j++){
        let number = inputArr[j];
        newArr.push(number);
    }
    console.log(newArr.join(''));
}

aggregate([2, 4, 8, 16]);