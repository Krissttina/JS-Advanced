function smallestNums(arr){
    let result = arr.sort((a, b) => a - b).splice(0, 2).join(' ');

    console.log(result);
}

smallestNums([30, 15, 50, 5]);