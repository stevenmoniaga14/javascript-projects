//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require ('readline-sync');

let startingFuel = 0;
let numAstronauts = 0;
let altitude = 0;


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

while (startingFuel <= 5000 || startingFuel > 30000) {
  startingFuel = Number(input.question("Enter the starting fuel level: "));
}


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

while (numAstronauts < 1 || numAstronauts > 7) {
  numAstronauts = Number(input.question("Enter number of astronauts: "));
}
  
let fuelDecrease = 100 * numAstronauts;

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuel >= fuelDecrease) {
    startingFuel -= fuelDecrease;
    altitude += 50;
}

console.log(`The shuttle gained an altitude of ${altitude} km.`)
//Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”



// If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”

if (altitude >= 2000) {
  console.log("Orbit Achieved");
} else {
  console.log(`Failed to reach orbit`);
}
