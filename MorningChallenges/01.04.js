// Morning Chalenange

/*
FIZZBUZZ WHITEBOARDING EXERCISE (conditionals and loops)
************
    - write a for loop running between the numbers 0 - 100
    - for multiples of 3, instead of the number, console.log "Fizz"
    - for multiples of 5 console.log "Buzz";
    - for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
    - for any other number, console.log the value
*/



function fizzbuzz() {}
for(let x= 0; x <= 100; x++) {
    if (x % 15 === 0) {
        console.log('Fizz Buzz');
    } else if (x % 5 === 0) {
        console.log ('Fizz');
    } else if (x % 3 === 0) {
        console.log ('Buzz')
    } else {
        console.log (x);
    }
}
fizzbuzz()