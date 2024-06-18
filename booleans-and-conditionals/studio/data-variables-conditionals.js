// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronauteMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronauteMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%"
let weatherStatus = "clear";
let preparedForLiftOff = true;
let dash = '------------------------------'


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    preparedForLiftOff = false;
    console.log('Total astronaut count exceeds!');
}

// add logic below to verify all astronauts are ready

if (astronautStatus !== "ready") {
    preparedForLiftOff = false;
    console.log('Not all astronauts are ready');
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg > maximumMassLimit) {
    preparedForLiftOff = false;
    console.log('Total mass exceeds limit!');
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
    preparedForLiftOff = false;
    console.log('Caution: Fuel temperature not within the range.');
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel !== "100%") {
    preparedForLiftOff = false;
    console.log('The fuel is not 100%');
}

// add logic below to verify the weather status is clear

if (weatherStatus !== "clear") {
    preparedForLiftOff = false;
    console.log('Weather status not clear');
}
// Verify shuttle launch can proceed based on above conditions

if (!preparedForLiftOff) {
    console.log('Misson Abort');
} else {
    console.log(`All systems are a go! Initiating space shuttle launch sequence.
        ${dash}
        Date: ${date}
        Time: ${time}
        Astronaut Count: ${astronautCount}
        Crew Mass: ${crewMassKg}
        Fuel Mass: ${fuelMassKg}
        Shuttle Mass: ${shuttleMassKg}
        Total Mass: ${totalMassKg}
        Fuel Temparature: ${fuelTempCelsius}
        Weather Status: ${weatherStatus}
        Have A Safe Trip to Astronauts!`);
}