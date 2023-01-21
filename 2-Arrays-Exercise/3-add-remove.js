function solve(input) {
  let number = 1;
  let arr = [];
  let length = input.length;
  let command = input.shift();

  for (let i = 0; i < length; i++) {
    if (command == 'add') {
        arr.push(number);
        number++;
    } else if (command == 'remove') {
        arr.pop(number);
        number++;
    }
    
    command = input.shift();
  }
  
  if(arr.length == 0){
        console.log('Empty');
    }else{
        console.log(arr.join('\n'));
    }
}

solve(['add', 'add', 'remove', 'add', 'add']);
