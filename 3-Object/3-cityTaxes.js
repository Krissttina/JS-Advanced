function cityRecord(name, population, treasury){
    const result = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
           this.treasury += this.taxRate * this.population; 
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * percentage / 100);
        }
    }
    console.table(result);
}

cityRecord('Tortuga',
7000,
15000)