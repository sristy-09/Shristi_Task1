class Vehicle{
    startEngine(){
        console.log("Engine started");
    }
}

class car extends Vehicle{
    startEngine(){
        console.log("Car engine started");
    }
}

class motorcycle extends Vehicle{
    startEngine(){
        console.log("Motorcycle engine started");
    }
}

const car1 = new car();
console.log(car1.startEngine());

const bike1 = new motorcycle();
console.log(bike1.startEngine());