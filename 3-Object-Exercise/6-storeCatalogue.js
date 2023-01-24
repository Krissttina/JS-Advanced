function storeCatalogue(arr){
    let catalogue = {};

    for (const line of arr) {
        let [product, price] = line.split(" : ");
        let letter = product[0];
        if(!catalogue.hasOwnProperty(letter)){
            catalogue[letter] = {};
        }
        catalogue[letter][product] = price;
    }

     let sorted = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    

    for (const key of sorted) {
        console.log(key);
        let productSorted = Object.keys(catalogue[key]).sort((a, b) => a.localeCompare(b));
        
        for (const product of productSorted) {
            console.log(`  ${product}: ${catalogue[key][product]}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4', 
'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 
'Boiler : 300', 'Apple : 1.25', 
'Anti-Bug Spray : 15', 'T-Shirt : 10'])