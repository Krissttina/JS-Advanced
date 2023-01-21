function rotateArray(arr, count){

    for(let i = 0; i < count; i++){
        let curr = arr.pop();
        arr.unshift(curr);
    }

    console.log(arr.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);