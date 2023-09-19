"use strict";
// Index Signatures
// interface TransactionObj {
//     readonly [index: string]: number
// }
// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number
// }
const todaysTransaction = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Prajwal: 23
};
console.log(todaysTransaction.Pizza);
console.log(todaysTransaction['Pizza']);
let prop = 'Pizza';
console.log(todaysTransaction[prop]);
const todaysNet = (transactions) => {
    let sum = 0;
    for (const transaction in transactions) {
        sum += transactions[transaction];
    }
    return sum;
};
console.log(todaysNet(todaysTransaction));
// won't work
// todaysTransaction.Pizza = 32;
// Well TS doesn't have an issue with this
console.log(todaysTransaction['Prajwal']);
const student = {
    name: 'Prajwal',
    GPA: 3.6,
    classes: [123, 222]
};
console.log(student.test);
for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 100,
    bonus: 50,
    "side-hustle": 12
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
