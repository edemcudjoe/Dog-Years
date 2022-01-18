//setting human age
const myAge = 22;

//variable depicting first 2 human years(can change)
let earlyYears = 2;
earlyYears *= 10.5;

//rest of human years
let laterYears = myAge - 2;

//converting laterYears to dog years
laterYears *= 4;

//calculating age in dog years
const myAgeInDogYears = earlyYears + laterYears;

//storing name in lowercase
const myName = 'Edem Cudjoe'.toLowerCase();

//displaying details with string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);