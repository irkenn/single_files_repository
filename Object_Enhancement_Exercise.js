//Same Keys and Values
//ES5

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

//ES6
const createInstructor = (firstName, lastName) => {
    return{
        firstName,
        lastName
    }
}

//Computed property names
//ES5

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

//ES6
const favoriteNumber = 42;
const instructor = {
    firstName : "Colt"
    [favoriteNumber] : "That is my favorite!"
}

//Object Methods
//ES5

var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

//ES6

const instructor = {
    firstName : "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

//createAnimal function

const createAnimal = (species, verb, noise) => {
    return {
        species,
        verb,
        [verb](){
            return noise;
        }
    }
}