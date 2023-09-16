// Type assertion or casting

type One = string;
type Two = string | number;
type Three = 'Hello'

// Convert to more or less specific type
let a: One = 'Hello'
let b = a as Two // less specific

// Hover over this by setting type One = number
// let c = a as Three // more specific

let c = a as Three 

let d = <One>'world'
let e = <string | number>'world'

// a use case for type assertion
const addOrConcat = (a: number, b: number, c: ('add' | 'concat')): (number | string) => {
    if(c === 'add') {
        return a + b;
    } 
    return '' + a + b;
}

// essentially we are telling react we know better
let myVal: string = addOrConcat(2, 2, 'concat') as string;

// be careful -  a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number;
let currVal: Three = addOrConcat(2, 2, 'concat') as Three;

// forced type conversion
(10 as unknown) as string

// The DOM this is where type assertion really shines

// ! -> non-null assertion
// we are telling typescript that we know better than it and 
// their is an image by id '#img' as it is not going to be null
const myImg = document.getElementById('#img')! as HTMLImageElement;
const img = document.querySelector('img') as HTMLImageElement;
const nextImg = <HTMLImageElement> document.querySelector('img');

img.src
myImg.src