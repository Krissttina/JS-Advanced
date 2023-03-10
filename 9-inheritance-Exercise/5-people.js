function solve(){
    class Employee{
        constructor(name, age){
            if(new.target === Employee){
                throw new Error('Cannot instatiate abstract class!')
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work(){
            const currLine = this.tasks.shift();
            console.log(this.name + currLine);
            this.tasks.push(currLine);
        }
        collectSalary(){
            console.log(`${this.name} recived ${this.getSalary()} this month`);
        }

        getSalary(){
            return this.salary;
        }
    }

    class Junior extends Employee{
        constructor(name, age){
            super(name, age)
            this.tasks.push(' is working on a simple task.')
        }
    }

    class Senior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push(' is working on a complicated task.')
            this.tasks.push(' is taking time off work.')
            this.tasks.push(' is supervising junior workers.')
        }
    }

    class Manager extends Employee{
        constructor(name, age){
            super(name, age);
            this.dividend = 0;
            this.tasks.push(' scheduled a meeting.')
            this.tasks.push(' is preparing a quaterly report.')
        }

        getSalary(){
        return this.salary + this.dividend;
        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}