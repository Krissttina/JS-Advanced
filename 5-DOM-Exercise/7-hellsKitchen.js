function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    const input = document.querySelector('#inputs>textarea');
    const bestResP = document.querySelector('#bestRestaurant>p');
    const workersP = document.querySelector('#outputs #workers p');
 
    function onClick () {
       let arr = JSON.parse(input.value);
       let restaurants = {};
 
       arr.forEach((line) => {
          const tokens = line.split(' - ');
          const name = tokens[0];
          const workersArr = tokens[1].split(', ');
          let workers = [];
 
          for (const worker of workersArr) {
             let workerTok = worker.split(' ');
             const salary = Number(workerTok[1]);
             workers.push({ name: workerTok[0], salary })
          }
          
          if(restaurants[name]){
             workers = workers.concat(restaurants[name].workers);
          }
 
          workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
          let bestSal = workers[0].salary;
          let avgSal = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;
          
          restaurants[name] = {
             workers,
             avgSal,
             bestSal,
          };
       });
 
       let bestResSal = 0;
       let best = undefined;
 
       for (const name in restaurants) {
          if (restaurants[name].avgSal > bestResSal) {
             bestResSal = restaurants[name].avgSal;
             best = {name, ...restaurants[name]}
          }
       }
       bestResP.textContent = `Name: ${best.name} Average Salary: ${best.avgSal.toFixed(2)} Best Salary: ${best.bestSal.toFixed(2)}`;
 
       let workerResult = [];
       best.workers.forEach((worker) => {
          workerResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
       });
       
       workersP.innerText = workerResult.join(' ');
    }
 }