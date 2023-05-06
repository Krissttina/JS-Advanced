function solve(input){
    let pattern = /[A-Za-z]+/g;
    let first = input.match(pattern);
    let newArr = [];

    for(let i = 0; i < first.length; i++){
        let word = first[i];
        newArr.push(word.toUpperCase());
    }
    console.log(newArr.join(', '));
}

solve('Hi, how are you?');

//66pts/100pts