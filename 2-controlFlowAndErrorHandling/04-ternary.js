// act as a shortcut for writing if/else or switch statements

let num = 6;

//ternary
(num >0) ? console.log('yes it is ') : console.log('no it isnt');
// (1)  (2)                         (3)

/*
 1. parens act as our if. checks if the statement evaluates as true
 2. if the statement is true, run what is after the question mark
 3. colon acts as our 'else' or catch all statement
*/

if (num > 0) {
    console.log('yes it is')
} else {
    console.log('no it isnt')
}

let num = 6;

(num == 0) ? console.log('hello') : (num< 0) ? console.log('hi') : console.log('goodbye')

(num == 0) ? console.log('hello')
    : (num < 0) ? console.log('hi')
    : console.log('goodbye');

let age = 100;

(age >= 25) ? console.log('Yay you can rent a car') 
    : (age >= 21) ? console.log('Yay you can drink') 
    : (age >= 18) ? console.log('yay you can vote!') 
    : console.log('sorry, you are too young to do anything')

