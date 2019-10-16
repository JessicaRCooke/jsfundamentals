function zach(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
}
// `xxx xxx xxx ${xxx}` -string interpolation
zach('cheese pizza');

// function parameters are place holders for data passed into the fucntion when caling or 'invoking' the function
// functions need parameters to accept data given to them

function name(first, last) {
 let fullName = first + ' ' + last;
 console.log(`Hello, my name is ${fullName}`); 
}

name('Jessica', 'Cooke');

function name(first, last) {
    let fullName = `${first} ${last}`;
    console.log(`Hello, my name is ${fullName}`); 
   }
   
   name('Jessica', 'Cooke');