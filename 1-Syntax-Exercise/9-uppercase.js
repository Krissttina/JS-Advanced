function solve(input){
    let pattern = /[A-Za-z]+/g;
    let first = input.match(pattern);
    let newArr = [];

    for(let i = 0; i < first.length; i++){
        let cur = first[i];
        newArr.push(cur.toUpperCase());
    }
    console.log(newArr.join(', '));
}

solve('Hi, how are you?');