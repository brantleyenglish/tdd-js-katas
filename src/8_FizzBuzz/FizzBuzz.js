// Write a program that prints one line for each number from 1 to 100
// For multiples of three print Fizz instead of the number
// For the multiples of five print Buzz instead of the number
// For numbers which are multiples of both three and five print FizzBuzz instead of the number


const fizzBuzz = (array) => {
    array.forEach(value => {
        if (typeof value === 'number' && value >= 1 && value <= 100) {
            if (value % 3 === 0 && value % 5 === 0 ) {
                console.log('FizzBuzz');
            } else if (value % 3 === 0) {
                console.log('Fizz');
            } else if (value % 5 === 0) {
                console.log('Buzz');
            } else {
                console.log(value, '\n')
            }
        }
    })
}

module.exports = fizzBuzz;