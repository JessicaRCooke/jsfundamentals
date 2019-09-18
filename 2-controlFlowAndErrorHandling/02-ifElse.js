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

var elevatorUp = false;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorStuckWhileWeAreOnIt = false;
var elevatorNumber = 13;

if (elevatorUp === true) {    //Note: You don't have to have the ===
	console.log("Going up");
} else {
	console.log("Going down");
}  

if (elevatorBroken) {    //Note: You don't have to have the ===
	console.log("Bummer. Let's take the stairs.");
} else {
	console.log("Which floor?");
}  

//Write another one for stuck:
if (elevatorStuckWhileWeAreOnIt){
	console.log("Oh no! We're stuck!");
} else {
	console.log("This elevator is fast.");
} 

//But maybe we're standing there waiting?
if(elevatorBroken && elevatorDown){
	console.log("I hope this thing doesn't start flying down!");
} else {
	console.log("How long are you in town for?");
}

if(elevatorBroken || elevatorStuckWhileWeAreOnIt){
	console.log("Hi Bob, this is Bob with maintenance. How can I help?");
}

//Using ints and other types
if(elevatorNumber === 13 && elevatorStuckWhileWeAreOnIt){
	console.log("This is not our lucky day!");
}

var bankAccount = 10000;
var debt = 4200;
var difference = bankAccount - debt;


console.log('I have $' + bankAccount  + 'in my bank account, and I am $'  + debt + 'in debt.');
  	
if (difference > 700) {
		console.log("I have some extra money. I should pay off my debt. I'll have $" + difference + " leftover.");	
	} else {
		console.log("It probably isn't a good time to pay off my debt.");
}  	