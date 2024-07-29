//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore (score) {
        this.scores.push(score);
    }

    avgScore () {
        let sum = 0;
        for (let i=0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        let avg = Math.round((sum/this.scores.length) * 10) / 10
        return avg;
    }

    status () {
        let status = "";
        // Call avgScore method here
        const avgGrade = this.avgScore();

        if (avgGrade >= 90) {
       status = "Accepted";
        } else if (avgGrade >= 80 && avgGrade < 90) {
       status = "Reserve";
        } else if (avgGrade >= 70 && avgGrade < 80) {
        status = "Probationary";
        } else {
        status = "Rejected";
        }
        return status;
    }
}
let bubbaBear = new CrewCandidate ("Bubba Bear", 135, [88,85,90]);
let merryMaltese = new CrewCandidate ("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate ("Glad Gator", 225, [75, 78, 62]);

// console.log(`${bubbaBear.name} earned an avg test score of ${bubbaBear.avgScore()}% and has a status of ${bubbaBear.status()}`);

// console.log(bubbaBear, merryMaltese, gladGator);

// bubbaBear.addScore(25)
// console.log(bubbaBear);

// console.log(merryMaltese.avgScore());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let testAdditionsReserve = 0;
let testAdditionsAccepted = 0;
let isReserveStatusMet = false;

while (gladGator.status() !== "Accepted") {
    gladGator.addScore(100);
    
    if (!isReserveStatusMet && gladGator.status() === "Reserve") {
        // Counts # of tests once it reaches Reserve status. It is # of times testAdditionsAccepted has been recorded plus 1
        testAdditionsReserve = testAdditionsAccepted  + 1;
        isReserveStatusMet = true;
    }
    testAdditionsAccepted++;
}

console.log(`Gator needs ${testAdditionsAccepted} tests to reach ${gladGator.status()} accepted status.`);
console.log(`Gator needs ${testAdditionsReserve} tests to reach ${gladGator.status()} reserve status.`);