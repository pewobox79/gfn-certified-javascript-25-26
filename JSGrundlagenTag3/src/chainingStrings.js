'use strict'
//Chaining String => STRING verketten
const firstName = prompt('Vorname');
const lastName = prompt('Nachname');

const fullName = firstName + ' ' + lastName
const fullNameAsTemplateString = `${firstName} ${lastName}`
console.log("Mein vollständiger Name ist: ", fullNameAsTemplateString)   
//Aufgabe: console.log ausgabe ebenfalls als TemplateString ausgeben!
console.log(`Mein vollständiger Name ist ${fullNameAsTemplateString}`)

//Dimitri Bsp:
/* let fullNameAsTemplateString = `${firstName} ${lastName}`
console.log('My full name is:', fullNameAsTemplateString);

fullNameAsTemplateString = `My full name is: ${firstName} ${lastName}`
console.log(fullNameAsTemplateString); */


const age = 46
const multiply10 = 10

console.log(`Mein alter multipliziert mit 10 ist ${age * multiply10}`)


// Zeilenumbruch in template string mit '\n' 

console.log(`Mein Name ist mit Zeilenumbruch:\n${fullNameAsTemplateString}`)
// Beispiel aus WPI lession 6.4    
console.log('Please enter the number of files for the followingdirectory:\nC:\\important_folder\\next_important_folder')