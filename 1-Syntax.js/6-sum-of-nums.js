function sumOfNums(n, m){
    let first = Number(n);
    let second = Number(m);
    let curr = 0;
    let sum = 0;

    for(let start = first; start <= second; start++){
        curr = start;
        sum += curr;
    }
    console.log(sum);
}

sumOfNums('-8', '20');