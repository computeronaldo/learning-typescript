"use strict";
// This seems quite redundant but we can do better with data access modifiers.
// class Coder {
//     // property needs to exist in the class and same 
//     // needs to be provided inside the constructor.
//     name: string
//     music: string
//     age: number
//     lang: string
//     constructor(name: string, music: string, age: number, lang: string) {
//         this.name = name;
//         this.music = music;
//         this.age = age;
//         this.lang = lang;
//     }
// }
// Let's no repeat ourselves
class Coder {
    constructor(name, music, 
    // can only be accessed inside this class (what that means?)
    age, 
    // like private you can't access this outside class
    // but unlike private protected data member can be
    // accessed inside derived class.
    lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age} years old.`;
    }
}
const Prajwal = new Coder('Prajwal', 'Rock', 23);
console.log(Prajwal.getAge());
// console.log(Prajwal.age);
// console.log(Prajwal.lang);
class WebDev extends Coder {
    constructor(computer, name, age, music) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write in ${this.lang}`;
    }
}
const Mike = new WebDev('Dell Inspiron', 'Mike', 28, 'Hip-hop');
console.log(Mike.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
///////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name, id = 0) {
        this.name = name;
        this.id = id;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
// above we have seen data members being initialized inside constructor
// and each of those members is associated with an instance of the class.
// But data members and functions declared with keyword static in-front
// of them are associated directly to the class instead of being unique
// for each instance of class we create. (Are these members and functions 
// global for all instance of the class we create?)
Peeps.count = 0;
const Steve = new Peeps('Steve');
const John = new Peeps('John');
const Amy = new Peeps('Amy');
console.log(Steve.id);
console.log(John.id);
console.log(Amy.id);
console.log(Peeps.count);
///////////////////////////////////////////////////////////////
// Getters and setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Jimmy Hendrix'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Led Zep', 'Pink Floyd'];
console.log(MyBands.data);
