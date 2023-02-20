class Hex {
    constructor(value){
        this.value = value;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        return `0x${this.value.toString(16).toLocaleUpperCase()}`
    }

    plus(num){
        return new Hex(this.value + num);
    }

    minus(num){
        return new Hex(this.value - num);
    }

    parse(num){//c
        return parseInt(num, 16);
    }
}