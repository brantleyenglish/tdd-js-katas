// Write a program that prints one line for each number from 1 to 100
// For multiples of three print Fizz instead of the number
// For the multiples of five print Buzz instead of the number
// For numbers which are multiples of both three and five print FizzBuzz instead of the number

const fizzBuzz = require("./FizzBuzz");

describe("FizzBuzz", () => {
    it('should each line print a number', () => {
        console.log = jest.fn();
        fizzBuzz([13, 7, 4]);
        expect(console.log).toHaveBeenCalledTimes(3)
        expect(console.log).toHaveBeenCalledWith(13, '\n');
        expect(console.log).toHaveBeenCalledWith(7, '\n');
        expect(console.log).toHaveBeenCalledWith(4, '\n');
    })

    it('should not print a number less than 1', () => {
        console.log = jest.fn();
        fizzBuzz([-4]);
        expect(console.log).toHaveBeenCalledTimes(0);
    })
    it('should not print a number more than 100', () => {
        console.log = jest.fn();
        fizzBuzz([200]);
        expect(console.log).toHaveBeenCalledTimes(0);
    })

    it('should multiples of 3 print Fizz', () => {
        console.log = jest.fn();
        fizzBuzz([6]);
        expect(console.log).toHaveBeenCalledWith('Fizz');
    });

    it('should multiples of 5 print Buzz', () => {
        console.log = jest.fn();
        fizzBuzz([10]);
        expect(console.log).toHaveBeenCalledWith('Buzz');
    });

    it('should multiples of 5 and 3 print FizzBuzz', () => {
        console.log = jest.fn();
        fizzBuzz([15]);
        expect(console.log).toHaveBeenCalledWith('FizzBuzz');
    });
});