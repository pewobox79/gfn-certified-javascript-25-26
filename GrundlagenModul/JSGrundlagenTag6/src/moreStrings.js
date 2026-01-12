'use strict'
// Weitere methoden auf STRING Type


const username = 'markus maria';
console.log(username.length) // => return ist 12

//jeder string hat index werte 
// jeder character nimmt eine index ein!

/**
 * 'P' => index 0
 * 'e' => index 1
 * 't' => index 2
 * usw...
 * 'l' => index 8
 * 'f' => index 9
 */

const spaceIndex = username.indexOf(' ')
console.log("Das Leerzeichen befindet sich auf index nr.", spaceIndex)

const firstName = username.substring(0 , spaceIndex) //=> soll Markus sein
const secondName = username.substring(spaceIndex + 1)// => soll Maria sein 

console.log(firstName)
console.log(secondName)

// aufgabe: die letzten buchstaben des fistname und secondname sollen UPPERCASE sein
const fistnameLastChar = firstName.substring(firstName.length - 1) 
const secondNameLastChar = secondName.substring(secondName.length - 1)

console.log("fistnamelastchar", fistnameLastChar, secondNameLastChar)

//Finde Character an specieller stelle in einem string
const firstLetterFirstname = firstName.charAt(0).toUpperCase()
const firstLetterSecondname = secondName.charAt(0).toUpperCase()

const avatarTwoLetter = firstLetterFirstname + firstLetterSecondname
console.log("AVATAR TWO LETTER", avatarTwoLetter)

//replace vs replaceAll

const myString = 'Peter ist ein Mensch! Peter kann auch malen!'

const newString = myString.replace('er', 'ra') // => NUR der erste wird umgesetzt!!!

const newStringAll = myString.replaceAll('er', 'ra')
console.log("newString", newString, newStringAll)

// Includes => irgendwo in dem gegebenen String

const search = ' Peter'

const isPeterAvailable = myString.includes(search) // => true weil 'Peter' in dem string vorhanden ist

console.log("available? ", isPeterAvailable ? "Ja, er ist verfügbar" : "Nein, nicht da")


// startsWith => beginnt am Anfang des String mit der gegebenen Suche

const startWithPeter = myString.startsWith(search.trim())
console.log("starts with peter", startWithPeter)


