// FOR OF LOOPS ARE USED FOR ARRAYS
// can't use on object beause there is no index


// For of loops loop over iterable properties
// iterable meaning able to 'parse' through with numbers


// we cannot use a for of loop with an object because object so not have indexes
// or iterable properties - objects are enumerable

// for of loops use for arrays
// for in loops use for objects (but we can also use them for arrays)

let student = {
    name: 'Peter',
    awesome:  true,
    degreee: 'JavaScript',
    week: 1
};
for (let item of student){
    //console.log(item);
    console.log(item);
}

let dogArray = ['husky', 'german shepard', 'pug', 'border collie', 'chihuahua'];

for (dog of dogArray) {
    console.log(dog, 'goes bark');
}