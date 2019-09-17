// BOOLEAN: has two possible values of either true or false

let on = true;
console.log(on);

let off = false;
console.log(off);

// NULL: null is an empty value. Think of it as an empty container. Nothing is in it, but it can be filled in later.

let empty = null;
console.log(empty);

//UNDEFINED: no value assigned and does not act as an empty container

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);
 
// correct can be used as undefined 

//NUMBERS: numbers are numbers or integers. 

let degrees = 85;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let a = Number('123');
console.log(a);

// STRINGS: datatype used to represent text. Either in single or double quotes

let stringOne = 'single quotes';
let stringTwo = "double quotes";
console.log(stringOne, stringTwo);

let first = 1050 + 100;
console.log(first);

let second = '1050' + '100';
console.log(second);


// OBJECTS: are used to store multiple vaulues instead of singluar valaue
// objects hold key value paris. Objects can hold mulitple datatypes

let frodo = {
    race: 'hobbit',
    rings: '1',
    cloak: 'true'
}

console.log(frodo);
console.log(typeof frodo);

// ARRAYS: containers that hold a list of items

let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);

// addition and concatenation 
let third = 1050 + '100';
console.log(third);
console.log(typeof third);


let firstName = 'Jessica';
let lastName ='Cooke';
let houseNumber = 721;
let street = 'Bancroft Street';
let city = 'Indianapolis';
let state = 'Indiana';
let zipcode = 46201;
console.log(firstName + ' ' + lastName + ' ' + houseNumber + ' ' + street + " " + city + ' ' + state +  ' ' + zipcode);


// STRING PROPERTIES
    // properties are qualities associated with certain datatypes
    // strings and numbers both have qualities associated with them and their own properties
    
let myName = 'Jessica';
console.log(myName.length); // the only time javaScript doesn't start counting from zero

// STRING METHODS: methods are tools that help us manipulate data
    // properties use '.', methods use '.Methods()'
    // ".includes" checks to see if the variable is includeed

let myNameIS = "Jessica";
console.log(myNameIS.toUpperCase());

let home = 'my home is Irvington';
console.log(home.includes('Irvington'));
 

let sent = 'this sentence will be split into indiavidual parts';
console.log(sent.split('')); 
// you can also use the split methods and store it into a new variable then 