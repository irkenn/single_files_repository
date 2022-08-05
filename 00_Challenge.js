class Vehicle {
    constructor(a,b,c){
        this.make = a;
        this.model = b;
        this.year = c; 
    }
    honk() {
        return "Beep";
    } 
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(a,b,c){
        super(a,b,c);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(a,b,c){
        super (a,b,c);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}
class Garage {
    
    constructor (capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    
    add(x){
        
         if(this.vehicles.length >= this.capacity ){
            return "Sorry we're full"
    }
        else{
            this.vehicles.push(x);
            return "Vehicle added!";
        }
}