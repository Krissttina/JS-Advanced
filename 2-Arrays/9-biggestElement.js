function biggestElement(arr){
    let result = [];

    let finIndex = arr.length;
    for(let i = 0; i < finIndex; i++){
        arr[i].sort((a, b) => b - a);
        result.push(arr[i][0]);
    }

    return Math.max(...result);
}

biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);