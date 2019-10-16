// variables are named containers for storing data values// 
// we name variables so we can refer to them later//

    let a    =     2;

/* (1)  (2)  (3)  (4) 

1- variable javascript keyword
2- name of the variable
3- = is the assignment operator
4- variable value or data type
can't start variable with a number
 js is case sensitive no spaces are allowed in variable
*/

/*
    var, let, const: 

        - var: "old" keyword for variables, wont use as often
        - let: "new" keyword for variables, introduced in es6
        -cont: declares an unchangeable variable
 */

 // declaration: left side of variable
 // initialization: right side of variable

 let x;console.log('Declaration', x); //declaration

 x = 10;
 console.log('Initialization', x); // initailization

 x = 33;
 console.log('reinitaliation', x);

 ///////////////////////////////////////

 let today = 'Great';
 const elevenFifty = 'wonderful';
 console.log(today, elevenFifty);


 today = 'lovely';
 console.log(today, elevenFifty);

 elevenFifty = 'Super';
 console.log(today, elevenFifty);
