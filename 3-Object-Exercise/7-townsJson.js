function solve(arr){
    const towns = [];
    for(let i = 1; i < arr.length; i++){
        const tokens = arr[i].split(/\s*\|\s*/g);
        const town = tokens[1];
        let latitude = Number(tokens[2]).toFixed(2);
        let longtitude = Number(tokens[3]).toFixed(2);
        const curObj = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longtitude),
        }
        towns.push(curObj)
    }
    console.log(JSON.stringify(towns));
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])