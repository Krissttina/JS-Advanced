function numSequence(n, k){
    let arr = [1];
    let value = 0;
    let iner = 0;

    for (let i = 0; i < n - 1; i++) {  
        
        if(i - k < 0){
           value = arr.slice(0, i + 1)
        }else if(i - k == 0){
            value = arr.slice(1, i + 1)
        }else{
            value = arr.slice(i - k + 1, i + 1)  
        }

         iner = 0;

        for (const num of value) {
            iner += num ;
        }
        arr.push(iner);
    }
    return arr;
}

numSequence(8, 2)
//[1, 1, 2, 4, 7, 13]