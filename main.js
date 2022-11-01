class Tansport{
    constructor(type, model, fuel){
        this.type = type;
        this.model = model;
        this.fuel = fuel;
    }

    startEngine(){
        console.log(`${this.model} engine started`);
    }
}

class Car extends Tansport{
    constructor(type, model, fuel, category){
        super(type, model, fuel);
        this.category = category;
    }
}

const vw = new Car ('hatchback', 'Golf', 'petrol', 'little car')
console.log(vw);
vw.startEngine();

