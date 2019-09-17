let weather = 75

if (weather < 70) {
    console.log('wear a jacket')
} else {
    console.log('no jacket necessary')
}






let name = 'zAchARy'

if (name[0] == name[0].toUpperCase()){
    console.log(name)
} else {
    console.log('hey this isnt written correctly')

}


let name = 'zAchARy'

if (name[0] == name [0].toUpperCase()) {
    console.log(name[0])
}else {
    console.log(name.slice(1).toLowerCase())
}
// the slcie method extracts parts of a string and returns the extracted parts in a new string

// gold

let name = 'ZAchARy'

if (name[0] == name[0].toUpperCase()) {
    let isUppercase = name[0] + name.slice(1).toLowerCase ();
    console.log('console.log #1:', isUppercase)

} else {
    let notUpperCase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('console.log #2:' , notUpperCase);
}


// ELSE IF

let age = 100

if (age <= 17) {
    console.log('Sorry you are too young to do anything')

} else if ( age >= 18) {
    console.log('Yay! You can vote!') 
} else if (age >= 21) {
    console.log('Yay! You can drink!') 
}
   else if (age >= 25) {
    console.log('Yay! You can rent a car!')
}

