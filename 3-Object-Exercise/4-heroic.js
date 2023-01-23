function solve(arr){
    const result = arr.reduce((acc, curr) => {
        const [name, level, item] = curr.split(' / ');
        const hero = {
            name,
            level: Number(level),
            items: item ? item.split(', ') : [],
        }
        acc.push(hero);
        return acc;
    }, []);
    
    return JSON.stringify(result);
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);