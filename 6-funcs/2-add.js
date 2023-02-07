function solution(add) {

  function add7(number){
        let n = add;
       return n += number;
  }
  console.log(add7(2)); //9
  console.log(add7(3)); //10
}
let add7 = solution(5);