function solve(arr){
    const filtered = arr.filter((x, i) => i % 2 == 1);
    const doubled = filtered.map(x => x * 2);
    const reversed = doubled.reverse();
    const result = reversed.join(' ');
    return result;
}

solve([10, 15, 20, 25]);