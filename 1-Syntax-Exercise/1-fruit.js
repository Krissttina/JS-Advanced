function fruitExe(fruit, grams, pricePerKg){
    let weight  = grams / 1000;
    let price = weight * pricePerKg;

    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

fruitExe('orange', 2500, 1.80);