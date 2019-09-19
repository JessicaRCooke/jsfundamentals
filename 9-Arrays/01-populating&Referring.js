// arrays are containers that hold a list of items
// denoted by {}

// arrays can hold multiple data types

let list = ['oragnge', 'banana', 'oreos'];
console.log(list[1]);

// to dig into an array we can use square bracket notation that contains the index number that we want to reference

let students = ['Tony', 'Marshall', 'Ryan', 'Ray', 23, true, ['Rhys', 'Iesha', 'Amira']];

console.log(typeof students); // object 
console.log(students instanceof Array); //true ---> instanceof operator is used to check the type of an objectat run time
                                        // arrays are technically 'objects'
console.log(students [1]);                                        
console.log(students [2]);

console.log(`Hello` ,students [6][2], + ',' + `you look nice today`);
