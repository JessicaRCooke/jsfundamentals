// FOR IN LOOPS ARE USED FOR OBJECTS but we can also use them for arrays
// great for iterating over values in an object. Properties in an object are whats called 'enmerable'
// for in loo[s iterate over an object's enumberable properties

let student = {
    name: 'Peter',
    awesome:  true,
    degreee: 'JavaScript',
    week: 1
};
for (let item in student){
    //console.log(item);
    console.log(student[item]);
}

let catArray =['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat in catArray) {
    //console.log(cat);
    console.log(catArray[cat])
}

let name = 'doNoVaN'
let capName;

for (let n in name) {
    //console.log(n)
    if (n == 0 ) {
        capName = name[n].toUpperCase(); 
    } else {
        capName += name[n].toLowerCase();
    }
}
console.log(capName);