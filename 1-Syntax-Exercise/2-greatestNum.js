function solve(a, b) {
  let devisors = [];
  for (let i = 1; i <= a; i++) {
    if (a % i == 0 && b % i == 0) {
      devisors.push(i);
    }
  }
  console.log(Math.max(...devisors));
}

solve(2154, 458);
