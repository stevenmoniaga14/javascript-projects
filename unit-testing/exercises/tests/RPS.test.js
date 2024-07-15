const whoWon = require('../RPS.js');

describe("whoWon", () => {
    test("returns tie when both players chose same option", () => {
        let output = whoWon('rock', 'rock')
        expect(output).toEqual("TIE!");

        output = whoWon ('scissors', 'scissors')
        expect(output).toEqual("TIE!")

        output = whoWon ('paper', 'paper')
        expect(output).toEqual("TIE!")
    });

    test("returns 'Player 2 Wins' if P1 = rock & P2 = paper", () => {
        let output = whoWon('rock', 'paper')
        expect(output).toEqual("Player 2 wins!")
    });

    test("returns 'Player 2 wins' if P1 = paper & P2 = scissors", () => {
        let output = whoWon('paper', 'scissors')
        expect(output).toEqual('Player 2 wins!')
    }); 

    test("returns 'Player 2 wins' if P1 = scissors & P2 = rock", () => {
        let output = whoWon('scissors', 'rock')
        expect(output).toEqual('Player 2 wins!')
    });

    test("returns 'Player 1 wins!' if P1 = rock & P2 = scissors", () => {
        let output = whoWon('rock', 'scissors');
        expect(output).toEqual('Player 1 wins!');
      });
    
      test("returns 'Player 1 wins!' if P1 = paper & P2 = rock", () => {
        let output = whoWon('paper', 'rock');
        expect(output).toEqual('Player 1 wins!');
      });
    
      test("returns 'Player 1 wins!' if P1 = scissors & P2 = paper", () => {
        let output = whoWon('scissors', 'paper');
        expect(output).toEqual('Player 1 wins!');
      });

      test("returns 'Invalid input' if any player pick wild answers", () => {
        let output = whoWon('rock', 'turtle');
        expect(output).toBe('Invalid input');
        
        output = whoWon('candy', 'paper');
        expect(output).toBe('Invalid input');
        
        output = whoWon('scissors', 'seed');
        expect(output).toBe('Invalid input');
      });
});

