// scope is how a computer keeps track of all the variables in program

//let x =12;

//function scope() {
//    let x = 33;
 //   console.log(x);
//}

//scope();
//console.log(x);
//

//let y = 12;

//function scope(){
 //   y = 33;
   // console.log(y);
//}
//scope();
//console.log(y); 

// var vs. let
// var example


//varTest();
//console.log(x);

// let example

// const example

function constTest() {
const scope = 1;
    if(true) {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
}

constTest();