// Loops offer us a quick and easy way to do something repeatedly, or loop over something

// NOTE: there is a danger of infinite loops

/*
    -for loops take in 3 parameters
        1. Initial expression
        2. condition
        3. increment expression
*/
//    (1)         (2)     (3)
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}


for (let i = 10; i >=0; i -= 1) {
    console.log(i);
}

for (let i = 0; i >=-24; i -= 2) {
    console.log(i);
}
 // Square bracket notation = index
let name = 'Donovan';

for (let i = 0; i < name.length; i++) {
    console.log(name[i])

}

for (let n of name) {
    console.log(n);
}


 let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log(sum);

let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}