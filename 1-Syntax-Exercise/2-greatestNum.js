function solve(one, two) {
  for (let i = 10; i > 1; i--) {
    if (one % i == 0 && two % i == 0) {
      console.log(i);
    }
  }
}
//not done
solve(15, 5);
