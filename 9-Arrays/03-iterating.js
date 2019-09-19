/*
 -how can we iterate over an array?
- for of loop
- for loop 
- forEach() method

- all of the above iterate over properties in array


*/

let food = ['Pecan Pie', 'Quesadilla', 'Cheese cake', 'Hotdog'];

//for(let i = 0; i < food.length; i++) {
//  }  console.log(food[1]);

//food.forEach(foodItem =>{
//    console.log(foodItem);
//})

food.forEach((foodItem, index) =>{
    console.log(foodItem);
    console.log(index);
})


let movies = ['Godzilla', 'Boss Baby', 'Die Hard', 'Detective Pikachu'];

movies.push('Lego Movie');
    console.log('push', movies);

movies.splice(4, 1, 'Ninjago');
    console.log('splice', movies);
    
movies.forEach(movieName => {  // can also use a fuctnion(movie) to list items
    console.log(movieName);
})