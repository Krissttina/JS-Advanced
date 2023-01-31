function calc(){
    let sumEl1;
    let sumEl2;
    let result;

    return{
        init: (selector1, selector2, resSel) => {
            sumEl1 = document.querySelector(selector1);
            sumEl2 = document.querySelector(selector2);
            result = document.querySelector(resSel);
        },
        add: () => (result.value = +sumEl1.value + +sumEl2.value),
        subtract: () => 
        (result.value = +sumEl1.value - +sumEl2.value),
    };
}