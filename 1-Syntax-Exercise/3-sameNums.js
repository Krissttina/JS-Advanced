function sameNums(num){
    let numToStr = num.toString();
    let sum = 0;
    let isSame = true;
    let first = numToStr[0];

    for (let index = 0; index <numToStr.length; index++) {
        if(first !== numToStr[index]){
            isSame = false;
        }
        sum += Number(numToStr[index]);
    }
    console.log(isSame);
    console.log(sum);
}

sameNums(2222222);