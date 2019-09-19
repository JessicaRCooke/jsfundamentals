let long = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
console.log(long.length);  // .length is the only thing in JavaScript that does not start counting from 0

let colors = ['blue', 'green', 'yellow', 'orange', 'purple'];
console.log(colors.length);
console.log(colors.toString());

console.log(typeof colors);

let arr = [1, 2, 3, 4, 5,];

//fat arrow function
if(arr instanceof Array === true) {
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
}

if(arr instanceof Array === true) {
    let revArr = arr.reverse();
    revArr.forEach(function(num) {
     console.log(num);
});
}