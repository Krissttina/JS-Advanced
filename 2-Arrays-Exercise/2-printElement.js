function printArray(arr, n){
    let output = [];
    for(let i = 0; i < arr.length; i+=n){
        output.push(arr[i]);
    }
    return output;
}

console.log(printArray(['5',
'20',
'31',
'4',
'20'],
2))