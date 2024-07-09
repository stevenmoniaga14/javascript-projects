// Code your orbitCircumference function here:

const orbitCirumference = (radius) => {
  return Math.round(2*Math.PI*radius);
  
  
}

// console.log(orbitCirumference(2000));


// Code your missionDuration function here:

const missionDuration = (orbComplete, radius = 2000, speed = 2800) => {
  
  let circumference = (2 * Math.PI * radius);

  let distance = circumference * orbComplete;

  const time = Math.round((distance / speed * 100 )) / 100;

  return time;
  
  // return (`'The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.'`);
};

// console.log(missionDuration(3));

// Copy/paste your selectRandomEntry function here:




// Code your oxygenExpended function here:

const oxygenExpended = (candidate, radius = 2000, speed = 2800) => {
  
  // Write how long the spacewalk will take in three orbits
  let duration = missionDuration(3, radius, speed);
  
  let oxygenUsed = candidate.o2Used(duration);
  oxygenUsed = Math.round(oxygenUsed*1000) / 1000;

  return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenUsed} kg of oxygen.`;
};



// Candidate data & crew array.
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
 let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

 function selectRandomEntry(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
  };

let finalSelected = selectRandomEntry(animals);
console.log(oxygenExpended(finalSelected));
 let crew = [candidateA,candidateC,candidateE];

 