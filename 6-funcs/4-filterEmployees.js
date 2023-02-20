function sortByCriteria(data, criteria){
    let obj = data.split(', ');
    let json = JSON.parse(obj);
    let outputArr = [];

    //console.table(obj);
    //console.table(json);
    //console.log(criteria);
    
       let newData = Object.values(json);
      // console.table(newData);

       //criteria
       let critSplit = criteria.split('-');
       let category = critSplit[0];
       let critValue = critSplit[1];
       
       for(let search in newData){
     //console.log(search + '-' + newData[search][category]);
        if(newData[search][category] == critValue){
            //console.log(newData[search]);
           outputArr.push(newData[search]);
        }
       }
    //console.log(outputArr);
    //console.table(outputArr);
    //sort

    for(let obj of outputArr){

        //console.log(obj[0]);
         console.table(obj);
      }

    //print
}

sortByCriteria(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female');