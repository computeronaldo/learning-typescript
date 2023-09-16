"use strict";
// Type assertion or casting
// Convert to more or less specific type
let a = 'Hello';
let b = a; // less specific
// Hover over this by setting type One = number
// let c = a as Three // more specific
let c = a;
let d = 'world';
let e = 'world';
// a use case for type assertion
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
// essentially we are telling react we know better
let myVal = addOrConcat(2, 2, 'concat');
// be careful -  a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
let currVal = addOrConcat(2, 2, 'concat');
// forced type conversion
10;
// The DOM this is where type assertion really shines
// ! -> non-null assertion
// we are telling typescript that we know better than it and 
// their is an image by id '#img' as it is not going to be null
const myImg = document.getElementById('#img');
const img = document.querySelector('img');
const nextImg = document.querySelector('img');
img.src;
myImg.src;
