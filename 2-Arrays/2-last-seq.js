function lastNumSequence(n, k){
    let arr = [1];
    
    for (let index = 0; index < n - 1; index++) {  
        let newValue = arr.slice(index).splice(index, k);
        //presmqtane na stoinostite
        console.log(newValue);

        arr.push(Number(newValue));
        console.log(arr);
    }
    
   // console.log(arr);
}

lastNumSequence(6, 3)
//[1, 1, 2, 4, 7, 13]