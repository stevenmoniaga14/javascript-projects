const checkFive = require('../checkFive.js');

describe("checkFive", function(){
    test("returns 'num is less than 5' when num < 5", function() {
        let output = checkFive(4);
        expect(output).toEqual("4 is less than 5.")
    });

    test("returns 'num is greater than 5' when num > 5", function () { 
        let output = checkFive(6)
        expect(output).toEqual("6 is greater than 5.")
    })

    test("returns 'num is equal to 5.", function(){
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.")
    })
})