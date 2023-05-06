function sortNumbers(arr){
    let output = [];
    let length = arr.length / 2;
    
    for(let i = 0; i < length; i++){
        const acsend = arr.sort((a, b) => a - b);
        output.push(acsend[i]); //[-3, 1, 3, 18, 31, 48, 52, 56, 63, 65]
        
        const decsend = acsend.sort((a, b) => b - a);
        output.push(decsend[i]);;
    }
    console.log(output);
    return output;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]

//50pts/100pts