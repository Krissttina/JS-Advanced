function num(p){
    let type = typeof(p)
    if(type === 'number'){
       let result = Math.pow(p, 2) * Math.PI; 
       console.log(result.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

num('str');