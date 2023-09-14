let stringArr = ['one', 'hey', 'Dave'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

stringArr[0] = 'John';
stringArr.push('hey');

guitars[0] = 1984;
guitars.unshift('Jim');

// Does't work
// stringArr = guitars;
// guitars = mixedData;  
// This works
guitars = stringArr;

mixedData = guitars;

let test = [];
let bands: string[] = [];
bands.push('Van Halen');

// Tuple  (type and position of type along with length of array is locked in as we define the tuple).
// We can see for ourselves this being a more stricter version of an array. 
let myTuple: [string, number, boolean] = ['Prajwal', 42, true];

let mixed = ['John', 1, false];

mixed = myTuple;

// This is a problem because our source 'mixed' might have more or fewer elements but for our tuple length is fixed.
// myTuple = mixed;
// myTuple[3] = 32;
myTuple[1] = 32;

// Objects
let myObj: object

// what!!!!!!!!!
myObj = [];

myObj = {};

const exampleObj = {
    prop1: 'Prajwal',
    prop2: true
}

exampleObj.prop1 = 'Mikel';
exampleObj.prop2 = false;

// This helps a lot to omit writing same code over and over
type Guitarist = {
    name?: string;
    active: boolean;
    albums: (string | number)[]
}

// We can think of interface like defining a class all the data members and methods.
// The only difference from defining a class is in an interface we will define type of
// data members and methods

// interface Guitarist {
//     name: string;
//     active?: boolean;
//     albums: (string | number)[]
// }

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name) {
        return `Hello ${guitarist.name.toLowerCase()}!`;
    }
    return 'Hello!'
}

console.log(greetGuitarist(jp));

// Enums
// "Unlike most TS features, Enums are not a type-level addition to JS but something added to the language and runtime"

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U);