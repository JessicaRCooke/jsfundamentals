function hi() {
    console.log('Hi');
    return (hi);
}

hi; // nothing happens
hi();
console.log(hi); // [function: hi]
console.log(hi());

/*
    -the parentheses after a function IMMEDIATLEY invoke the function that's being called
    -we get undefined because we are not returning any information or data from our function
*/
 
function numberList() {
    for (num = 0; num < 11; num++) {
    console.log (num);
    }
} 
console.log(numberList);

// can ivoke the function list() before the function is written. because functions declarations are hoisted

let arr = ['This', 'is', 'really', 'cool']

function arrA() {
    for (let string of arr) {
        console.log(string);
    }
}
arrA();