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


function count()
for (let i=-4; i <= 0; i++) {
    console.lgo(i) 
}

function count(i) {
if (i % 2 === 0) {
    console.log('the number is even') 
    }   else { 
            console.log('the number is odd')
        }
}
   
for (var i = 20; i > 1; i--){
	console.log(i);
}
let num = 2
function list() {
    for (num = 0; num < 11; num++){
        console.log(num);
    }
}