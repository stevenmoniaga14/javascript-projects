// Code your crewMass function here:



// Code your fuelRequired function here:




// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];

 const crewMass = (crew) => {
  let totalMass = 0;
  let i = 0;
  while (i < crew.length) {
    totalMass += crew[i].mass;
    if (crew[i].species === "dog" || crew[i].species === "cat") {
        totalMass += 200;
    } else {
      totalMass += 100;
    }
    i++;
  }
  return Math.round(totalMass * 10) / 10;
};

let totalCrewMass = crewMass(crew)
// console.log(totalCrewMass);

const fuelRequired = (rocketWeight, crew) => {
  let rocketMass = rocketWeight;
  let totalRocketMass = rocketMass + crewMass(crew);

  let extraFuel = 0;
  let i = 0;
  while (i < crew.length) {
    if (crew[i].species === 'dog' || crew[i].species === 'cat') {
      extraFuel += 200;
    } else {
      extraFuel += 100;
    }
    i++;
  }

  let fuel = totalRocketMass * 9.5 + extraFuel;

  fuel = Math.ceil(fuel);
  return fuel;
}

console.log(fuelRequired(75000, crew));
 