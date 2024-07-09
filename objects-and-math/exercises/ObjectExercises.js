let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: 
      function () {
      let steps = Math.floor(Math.random()*11);
      console.log(`${this.name} took ${steps} steps`);
      return steps;
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function () {
      let steps = Math.floor(Math.random()*11);
      console.log(`${this.name} took ${steps} steps`);
      return steps;
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function () {
      let steps = Math.floor(Math.random()*11);
      console.log(`${this.name} took ${steps} steps`);
      return steps;
   }
};

let beagleOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function () {
      let steps = Math.floor(Math.random()*11);
      console.log(`${this.name} took ${steps} steps`);
      return steps;
   }
};

let tarta = {
   name: "Almina",
   species: "Tartigrade",
   mass: 0.0000000001,
   age: 1,
   move: function () {
      let steps = Math.floor(Math.random()*11);
      console.log(`${this.name} took ${steps} steps`);
      return steps;
   }
};

// superChimpOne.move();
// salamander.move();
// superChimpTwo.move();
// beagleOne.move();
// tarta.move();


// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautID"] = 1;
salamander["astronautID"] = 2;
superChimpTwo["astronautID"] = 3;
beagleOne["astronautID"] = 4;
tarta ["astronautID"] = 5;

// console.log(superChimpOne);

// Add a move method to each animal object

// Create an array to hold the animal objects.

let zooAnimals = [superChimpOne, salamander, superChimpTwo, beagleOne, 
   tarta]

// Print out the relevant information about each animal.

function crewReports (animal) {
   return `${animal.name} is a ${animal.species}. 
   They are ${animal.age} years old and ${animal.mass} kilograms. 
   Their ID is ${animal.astronautID}`;
};

console.log(crewReports(superChimpOne));




// Start an animal race!

function fitnessTest(array) {
   
let results = [];
   for (let i in array) {
      let animal = array[i];
      let totalSteps = 0;
      let turns = 0;

      while ( totalSteps <= 20) {
         let steps = animal.move();
         totalSteps += steps;
         turns++;
      }
   
      results.push(`${animal.name} took ${turns} turns to reach 20 steps.`)
   };

return results;

};

let raceResults = fitnessTest(zooAnimals);

for (let i=0; i<raceResults.length; i++) {
   console.log(raceResults[i]);
}




