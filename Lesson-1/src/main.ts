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
    // ! is an assertion and don't use it too much
    // with this assertion initializing secondLang
    // in constructor in not necessary 
    secondLang!: string

    constructor(
        public readonly name: string,
        public music: string,
        // can only be accessed inside this class (what that means?)
        private age: number,
        // like private you can't access this outside class
        // but unlike private protected data member can be
        // accessed inside derived class.
        protected lang: string = 'Typescript'
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello, I'm ${this.age} years old.`
    }
}

const Prajwal =  new Coder('Prajwal', 'Rock', 23);
console.log(Prajwal.getAge());
// console.log(Prajwal.age);
// console.log(Prajwal.lang);

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        age: number,
        music: string
    ) {
        super(name, music, age);
        this.computer = computer;
    }

    public getLang() {
        return `I write in ${this.lang}`
    }
}

const Mike = new WebDev('Dell Inspiron', 'Mike', 28, 'Hip-hop');
console.log(Mike.getLang());
// console.log(Mike.age);
// console.log(Mike.lang);

//////////////////////////////////////////////////////////////////

// Class implementing an interface.
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician{
    name: string
    instrument: string

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'));

///////////////////////////////////////////////////////////////////

class Peeps {
    // above we have seen data members being initialized inside constructor
    // and each of those members is associated with an instance of the class.
    // But data members and functions declared with keyword static in-front
    // of them are associated directly to the class instead of being unique
    // for each instance of class we create. (Are these members and functions 
    // global for all instance of the class we create?)
    static count:number = 0

    static getCount():number {
        return Peeps.count;
    }

    constructor(
        public name: string,
        public id: number = 0,
    ) {
        this.name = name;
        this.id = ++Peeps.count;
    }


}

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
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
        } else {
            throw new Error('Param is not an array of strings')
        }
    } 
}

const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Jimmy Hendrix'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'Led Zep', 'Pink Floyd'];
console.log(MyBands.data);