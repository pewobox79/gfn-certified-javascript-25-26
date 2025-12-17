'use strict'
console.log('constants and variables log')

// VARIABLES initiert mit dem schlüsselwort LET

let firstName; // => initiale definition der variablen

firstName = 'Peter' // => zuweisung des werte 'Peter' and die Variable 'firstName'

console.log(firstName)


//User input

//Aufgabe:
/**
 * Kleine Formular bauen mit prompt() und drei werte speichern
 * - Vorname
 * - Nachname
 * - Alter
 * 
 * in der console bitte dann folgendes ausgeben:
 * 
 * "Mein Name ist [Vorname] [Nachname]. Ich bin [Alter] alt."
 */

/* let firstNameUser = prompt("Wie ist dein Vorname")
let lastNameUser = prompt("Wie ist dein Nachname")
let ageUser = prompt("Wie alt bist du?")

let output = 'Mein Name ist ' + firstNameUser + ' ' + lastNameUser + '. Ich bin ' + ageUser + ' Jahre alt.'
console.log(output) */



// Contstants 

const TAX_RATE = 1.19 // => keine MAGIC-Number - sie hat eine schublade. in GROßBUCHSTABEN wichtig für Konfigurations Werte
//let netPrice = prompt("Wie ist der Netto Preis?")
//const totalPrice = netPrice * TAX_RATE
//console.log("total Price incl tax in Euro: ", totalPrice)


// Operatoren Zusammengesetzt

let carPrice = 10000
console.log("init carprice no tax: ", carPrice)
//neuer carprice mit tax
//carPrice = carPrice * TAX_RATE // => ausgeschriebene Version
carPrice *= TAX_RATE // => Kurzschreibweise mit zusammengesetzen operatoren
console.log("car price incl taxRate: ", carPrice)
    