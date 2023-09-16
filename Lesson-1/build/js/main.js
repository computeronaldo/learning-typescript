"use strict";
// We can think of interface like defining a class all the data members and methods.
// The only difference from defining a class is in an interface we will define type of
// data members and methods
// This won't work!
// interface PostId = stringOrNumber
// Literal Types
let myName;
myName = 'Prajwal';
// myName = 'John' // won't work
let userName;
userName = 'Michel';
// Both literal types and type aliases help to keep our code DRY.
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Heelo');
logMsg(add(2, 4));
let subtract = function (c, d) {
    return c - d;
};
let multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default parameter value
const sumAll = (a = 2, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 5));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 2, 2));
logMsg(sumAll(undefined, 3));
// Rest parameter
const total = (a, ...nums) => {
    return a + nums.reduce((cur, acc) => {
        return cur + acc;
    }, 0);
};
logMsg(total(2, 3, 3));
logMsg(total(1, 2, 3));
logMsg(total(2));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
};
const isNumber = (value) => {
    return (typeof value === 'number');
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    // if(typeof value === 'number') return 'number';
    if (isNumber(value))
        return 'number';
    // well to take typescript happy our function should return
    // a never type in case none of the above specified type guard
    // check passes. createError function return never type and 
    // satisfied typescript and stops it from showing those red
    // squigily lines.
    return createError('This should never happen');
};
