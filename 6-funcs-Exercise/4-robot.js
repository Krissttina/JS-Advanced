function solve(){
    const library = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    };

    const storedEl = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    function manager(str){
        let [command, action, quantity] = str.split(' ');
        quantity = Number(quantity);

        if(command === 'prepare'){
            const recipe = library[action];
            for(let el in recipe){
                if(recipe[el] * quantity > storedEl[el]){
                    return `Error: not enough ${el} in stock`
                }
            }
            for(let el in recipe){
                storedEl[el] -= recipe[el] * quantity;
            }
            return 'Success'
        }else if(command === 'restock'){
            storedEl[action] += quantity;
            return 'Success'
        }else if(command === 'report'){
            let result = [];
            for(const el in storedEl){
                result.push(`${el}=${storedEl[el]}`);
            }
            return result.join(' ');
        }
    }
    return manager;
}

let manager = solve (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrateohydrate in stock 
console.log (manager ("prepare turkey 1")); 
