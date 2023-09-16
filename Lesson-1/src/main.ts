// We can think of interface like defining a class all the data members and methods.
// The only difference from defining a class is in an interface we will define type of
// data members and methods

// Type are more of an Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string;
    active: boolean;
    albums: stringOrNumberArray;
}

type UserId = stringOrNumberArray;

// This won't work!
// interface PostId = stringOrNumber

// Literal Types
let myName: 'Prajwal'
myName = 'Prajwal'

// myName = 'John' // won't work

let userName: 'John' | 'Dave' | 'Michel'
userName = 'Michel'


// Both literal types and type aliases help to keep our code DRY.

// functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message);
}

logMsg('Heelo');
logMsg(add(2, 4));

let subtract = function (c: number, d: number): number {
    return c - d;
}

type mathFunction = (a: number, b: number) => number

let multiply: mathFunction = (c, d) => {
    return c * d;
}

logMsg(multiply(2, 2));

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if(typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}

// default parameter value
const sumAll = (a: number = 2, b: number, c: number = 2): number => {
    return a + b + c;
}

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 5));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 2, 2));
logMsg(sumAll(undefined, 3));

// Rest parameter
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((cur, acc) => {
        return cur + acc;
    }, 0);
}

logMsg(total(2, 3, 3));
logMsg(total(1, 2, 3));
logMsg(total(2));

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1;
    while(true) {
        i++;
        if(i > 100) {
            break;
        }
    }
}

const isNumber = (value: any): boolean => {
    return (typeof value === 'number');
}

const numberOrString = (value: (number | string)): string => {
    if(typeof value === 'string') return 'string';
    // if(typeof value === 'number') return 'number';
    if(isNumber(value)) return 'number';
    // well to take typescript happy our function should return
    // a never type in case none of the above specified type guard
    // check passes. createError function return never type and 
    // satisfied typescript and stops it from showing those red
    // squigily lines.
    return createError('This should never happen');
} 