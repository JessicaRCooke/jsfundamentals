/*
    - objects store enumberable properties in key value pairs
    - denoted by {}
*/

let testObj = {
    key: 'value',
    key: 'value',
    key: 'value'
}

let netFlix = {
    id: 1,
    name: 'The Office',
    season1: {
        seasonInfo:{
            episodeInfo: [{
                episode: 1,
                episodeName: "Pilot"
            },
            {
                episode: 2,
                episodeName: 'Diversity Day'
            },
            { 
                episode: 3,
                episodeName: 'Health Care'
            },
            {
                episode: 4,
                episodeName: 'The alliance'
            },
            {
                episode: 5,
                episodeName: 'Basketball'
            },
            {
                episode: 6,
                episodeName: 'Hot Girl'
            }
          ]
    

        }
    },
    season2: {},
    Season3: {},
}

/*
    - where arrays use brackte notation ( [] ), objects use what is called dot notation (.)

*/

//console.log("All Data", netFlix);

//console.log("Season Info:", netFlix.season1.seasonInfo);

console.log("Specific Episode .Name:", netFlix.season1.seasonInfo.episodeInfo[3].episodeName);

//console.log("Episode Name and Number:", netFlix.season1.seasonInfo.episodeInfo[2].episode.episodeName);

//console.log(`episode number: ${netFlix.season1.seasonInfo.episodeInfo[4].episode} - episode name:
//${netFlix.season1.seasonInfo.episodeInfo[4].episodeName}`);

/*
    JSON Object
        -JSON stands for JavaScript Object Notation
        -The JSON syntax is derived from JavaScript Object Notation syntax but the JSON format is text only
        -JSON exists as a string - useful when we want to fetch data from a server. It needs to be converted to a native
         JavaScript Object if you want to access the data
     
*/

let spaceJam ={
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig',
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charley Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkKnicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues',
   }
}

// Object.keys & object.values
//console.log(Object.keys(spaceJam.toonSquad));
//console.log(Object.keys(spaceJam.toonSquad.duck)); // gives the indexes of the string 'daffy duck'
//console.log(Object.keys(spaceJam.toonSquad).toString());

console.log(Object.values(spaceJam.toonSquad));

/*
 -Object bracket notation
    - object bracket notation also allows us to parse through an object and pull out specific information
    - using object bracket notation can be useful if we want to store a key from and object in a variable
    - all keys in an object are strings - this is why this will work 

*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: 'true',
    sun: 'true',
    size: 10
}

// keys in an object are strings - shown below

let test = Object.keys(garden);
//console.log(test)
//console.log(typeof test[0])


// standard dot notation
console.log(garden.vegetable);

// object bracket notation
let zucchini = garden['vegetable'];
// object followed by the key we want to grab in brackets. The key name that we pass into our object needs to be a 
// string (wrapped in quotes) because all keys in an objects are strings
console.log(zucchini);


let baking = {};
baking['zucchini'] = 'better make some bread'; // setting a key/value pair using object bracket notation 
console.log(baking);

console.log(baking[garden[vegetable]]);
console.log(baking[zucchini]);

// using object bracket notation is a good idea when you may not be able to use dot notation to dig through an object


let testObj = {
    "Spaces Here": true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj.['Spaces Here']);
// our use case for object bracket notation is if a key in our object has spaces in it.