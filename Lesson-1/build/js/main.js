"use strict";
// This only works for string.
const stringEcho = (arg) => arg;
// This works for any type of argument
const echo = (arg) => arg;
// Most common usecase for generics is utility functions
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg != null);
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'Prajwal' }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Prajwal' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
// T extending the interface HasID narrows down the types
// for T now T has to have an id property.
const processUser = (user) => {
    // process the user with logic
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
// Hover over the red squiggly line
// console.log(processUser({ name: 'Prajwal' }));
// the argument users is going to be an array of type T and each one of them must 
// have an id property. And K extends the keys of T. So K is key of object T which 
// necessarily have the property id as it implements the interface HasID.
// T[K] is the value of key K of object T and T[K][] is an array of such values.
const getUsersProperty = (users, key) => {
    return users.map((user) => {
        return user[key];
    });
};
const usersProperty = getUsersProperty([{ name: 'John', id: 23 }, { name: 'Dave', id: 34 }], 'name');
usersProperty.map((userProperty) => console.log(userProperty));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('John');
console.log(store.state);
store.state = 'Dave';
// This is an issue as passing 'John' makes TS to infer the type to string.
// And now we can't assign numbers or any other type.
//store.state = 12;
const myState = new StateObject([13, 'Mikel']);
myState.state = ['Dave', 69, 420];
console.log(myState.state);
