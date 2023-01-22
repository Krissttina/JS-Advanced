function townPopulation(arr){
    const result = {};
    for (const line of arr) {
       const token = line.split(' <-> ');
       const name = token[0];
       const population = Number(token[1]);

       if(name in result){
        result[name] += population;
       }else{
        result[name] = population;
       }

       result[name] = population;
    }

    for (const name in result) {
        console.log(`${name} : ${result[name]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);