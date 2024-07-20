// launchcode.test.js code:

const launchcode = require('../index.js');

describe("Testing launchcode", () => {
  test ("returns nonprofit when value is checked in 'organization'", () => {
    expect(launchcode.organization).toEqual("nonprofit");
  });

  test ("returns Jeff when value is checked in 'executiveDirector' ", () => {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  })

  test ("returns 100 when value is checked in 'percentageCoolEmployees' ", () => {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  })

  test ("returns three values when checked in 'programsOffered' ", () => {
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
    
  })

    test("returns 'Launch!' when passed a number only divisible by 2", () => {
      expect(launchcode.launchOutput(4)).toEqual('Launch!');
    });
  
    test("returns 'Code!' when passed a number only divisible by 3", () => {
      expect(launchcode.launchOutput(9)).toEqual('Code!');
    });
  
    test("returns 'Rocks!' when passed a number only divisible by 5", () => {
      expect(launchcode.launchOutput(5)).toEqual('Rocks!');
      
    });
  
    test("returns 'LaunchCode!' when passed a number divisible by 2 and 3", () => {
      expect(launchcode.launchOutput(6)).toEqual('LaunchCode!');
    });
  
    test("returns 'Code Rocks!' when passed a number divisible by 3 and 5", () => {
      expect(launchcode.launchOutput(15)).toEqual('Code Rocks!');
    });
  
    test("returns 'Launch Rocks!' when passed a number divisible by 2 and 5", () => {
      expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! CRASH!!!!");
    });
  
    test("returns 'LaunchCode Rocks!' when passed a number divisible by 2, 3, and 5", () => {
      expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!');
    });
  
    test("returns 'Rutabagas! That doesn't work.' when passed a number not divisible by 2, 3, or 5", () => {
      expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
    });
  });




  
 
  
