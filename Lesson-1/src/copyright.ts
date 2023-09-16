// Problem
// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear();
// year?.setAttribute('datetime', thisYear);
// year?.textContent = thisYear

// Solution 1
// const year = <HTMLSpanElement>document.getElementById('year');
// const thisYear: string = (new Date().getFullYear() as unknown) as string;
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

// Solution 2
// const year = <HTMLSpanElement>document.getElementById('year');
// const thisYear: string = new Date().getFullYear().toString();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

// Solution 3
let year: HTMLElement | null;
year = document.getElementById('year');

let thisYear: string;
thisYear = new Date().getFullYear().toString();

if(year) {
    year.setAttribute('datetime', thisYear);
    year.textContent = thisYear; 
}
