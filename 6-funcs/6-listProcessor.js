function listProcessor(arr){
    let length = arr.length;
    let result = [];

    for(let i = 0; i < length; i++){
        let line = arr.shift().split(' ');
        let command = line[0];

        switch(command){
            case 'add':
                result.push(line[1]);
                break;
            case 'remove':
                let index = result.indexOf(line[1]);
                result.splice(index,1);
                break;
            case 'print':
                console.log(result.join(', '));
                break;
        }
    }
}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])