function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];
    let result;
    try {
      result = lab.runLab(3);
    } catch (e) {
      result = "Error thrown";
    }
    console.log(`${lab.student} code worked: ${result === 27 ? true : result}`);
    // This is saying that result === 27, the question mark is asking "IF result is 27 return true" 
    // The : is the other option where if it does not return 27 then go to result
  }
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

gradeLabs(studentLabs);

let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];

gradeLabs(studentLabs2);
