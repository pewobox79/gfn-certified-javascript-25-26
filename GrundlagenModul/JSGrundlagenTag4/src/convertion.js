console.log('conversion session')
// KONVERTIEREN VON NUMMERN

const userNumber = prompt("What is your favorite number?") // => rückgabewert prompt() ist immer ein STRING DATA TYPE!!
console.log('userNum', userNumber)
const CONFIG_NUMBER = 4
const total = userNumber * CONFIG_NUMBER
console.log(`Your favorite number is: ${total} - mein total ist type of: ${typeof total}` )

// implizierte Konvertierung
/**
 * Die IMPLIZIERTE Konvertierung kommt vor bei operatoren wie 
 * - subtraction
 * / dividieren
 * * multiplizieren 
 */

console.log('5' * '5') // => rückgabewert number
console.log('4' / 2) // => rückgabewert number



// EXPLIZITE KONVERTIERUNG
/**
 * ich als entwickler lege fest, welchen datentypen der userinput bekommt!! Durch das Anwenden des Number() constructors!!
 */

const formatedUserInput = Number(userNumber)
const totalExplizit = userNumber + CONFIG_NUMBER
console.log(`Explizites Ergebnis: ${totalExplizit} - The userNumber is now typeOf: ${typeof formatedUserInput}` )


// QUIZ:
console.log(Number('3 Tage') * 7) // => result NaN
console.log(`${Number('3')} Tage` * 7) // => result NaN
console.log(`${Number('3')}` * 7) // => result ist 21
console.log('3' * 7)// => result 21