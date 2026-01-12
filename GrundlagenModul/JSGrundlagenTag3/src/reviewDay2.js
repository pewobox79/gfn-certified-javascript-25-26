// DS is logged

alert('Bist du auch ein person');

let firstName = prompt("Enter your name");

let lastName = prompt("Enter your last name");

console.log(firstName + " " + lastName);

// wieviele buchstaben hat mein vor und nachname zusammen?
let nameLength = firstName.length + lastName.length;
console.log("this is the length of your full name: ", nameLength);

//magic number

const MAGIC_NUMBER = 333;

const sum = nameLength * MAGIC_NUMBER; // => 333  ist eine magic number in diesem kontext

// nameLenght soll mit 4 multipliziert werden und der neue Wert soll in nameLength gespeichert werden

const MULTI_4 = 4;
nameLength = 4 * nameLength;
nameLength *= MULTI_4;
console.log(nameLength);


// DRY === 'DON`T REPEAT YOURSELF'

//Aufgabe ALARM wenn seite aufgrufen wird. => hinweis: BIST DU AUCH EINE PERSON?


