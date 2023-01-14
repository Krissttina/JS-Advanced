function squareStart(input){
    let count = input;
    let str = '* ';

    for (let index = 0; index < count; index++) {
        console.log(str.repeat(count));
    }
}

squareStart(2)