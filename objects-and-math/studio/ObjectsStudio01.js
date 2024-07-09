// Code your selectRandomEntry function here:
// Define random function


// Code your buildCrewArray function here:



// console.log(randomNumbers(idNumbers));

// Here are the candidates and the 'animals' array:

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

function selectRandomEntry(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
  
  };
  // Create function to select 3 numbers
    
  function randomNumbers (arr) {
    let storedArray = [];
  
  while (storedArray.length < 3) {
    let randomElements = selectRandomEntry(arr);
    if (!storedArray.includes(randomElements)) {
      storedArray.push(randomElements);
    }
  }
  return storedArray;
  }

let idNumbers = [291, 414, 503, 599, 796, 890];
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];



function buildCrew (arr1, arr2) {
  let crew = [];

  let numberSelect = randomNumbers(arr1);
  // console.log(numberSelect);

  for (let i=0; i < arr2.length; i++) {
    let candidateSelect = arr2[i];
    if (numberSelect.includes(candidateSelect.astronautID)) {
    crew.push(candidateSelect);
  }
}
  console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`);
  return crew;

}


// Code your template literal and console.log statements:

buildCrew(idNumbers, animals);
  

