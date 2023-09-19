// Index Signatures

interface TransactionObj {
    readonly [index: string]: number,
    // Pizza, Books and Job are required
    Pizza: number,
    Books: number,
    Job: number
}

// interface TransactionObj {
//     readonly [index: string]: number
// }

// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }

const todaysTransaction: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Prajwal: 23
}

console.log(todaysTransaction.Pizza);
console.log(todaysTransaction['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransaction[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let sum = 0;
    for(const transaction in transactions) {
        sum += transactions[transaction];
    }
    return sum;
}

console.log(todaysNet(todaysTransaction));

// won't work
// todaysTransaction.Pizza = 32;

// Well TS doesn't have an issue with this
console.log(todaysTransaction['Prajwal']);

////////////////////////////////////////////////////////////

interface Student {
    [key: string]: (string | number | number[] | undefined),
    name: string,
    GPA: number,
    classes?: number[],
}

const student: Student = {
    name: 'Prajwal',
    GPA: 3.6,
    classes: [123, 222]
} 

console.log(student.test);

for(const key in student) {
    console.log(`${key} : ${student[key]}`)
}

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA');

///////////////////////////////////////////////////////////////

// interface Income {
//     [key: string]: number
// }

// Literal types can't be used as keys inside interface
type Streams = 'salary' | 'bonus' | 'side-hustle'

type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 100,
    bonus: 50,
    "side-hustle": 12
}

for(const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
}