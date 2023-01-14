function num(a, b, operator){
    const operators = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b,
        '%': (a,b) => a % b,
        '**': (a,b) => a ** b,
    }

    console.log(operators[operator](a,b));
}

num(5, 6, '+');