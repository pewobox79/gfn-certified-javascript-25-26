//Vergleichsoperatoren

let num1 = '30'
let num2 = 30
let num3 = 'dreißig'


/**
 * der Rückgabewert bei der anwendung von Vergleichsoperatoren ist IMMER ein BOOLEAN 
 * Kann nur folgende Werte zurückgeben : FALSE / TRUE
 */

// Vergleich größer als:
console.log("ist num1 größer als num2: ", num1 > num2) // ist die num1 GRÖßER als num2

// Vergleich KLEINER als:
const isLess = num1 < num2
console.log("ist num1 kleiner als num2: ", isLess )

// vergleich IST GLEICH
console.log('num1 ist gleich groß als num2', num1 == num2)

// vergleich ist gleich oder größer
console.log('Ist num1 größer/gleich num2', num1 >= num2)

// vergleich ist gleich oder größer
console.log('Ist num1 kleiner/gleich num2', num1 <= num2)

// vergleich ist gleich und der der gleich DATEN TYPE
console.log('Ist num1 kleiner/gleich num2', Number(num1) === num2)

// vergleich ob nicht gleich / indentisch
console.log('ist nicht gleich oder identisch', num1 !== num2 )



// Übung:

const avgGroupAge= 34;
const userInput = ''

console.log('Is the user inside the avg range of my user group :', userInput <= avgGroupAge )

console.log(typeof (3 < 7))

// vergleich von Strings 
// vergleich ist auch CASE SENSITIVE

const user1 = ' peter '
const user2 = 'Peter'

//vergleich ob beide namen gleich sind
const formatedUser1 = user1.toLowerCase().trim()
const formatedUser2 = user2.toLowerCase().trim()
console.log('hat user1 den gleichen namen wie user2:', formatedUser1 == formatedUser2)


// prüfe ob num2 ein typeof number ist

console.log(typeof num2 == typeof 1)
console.log(typeof num1 == 'number')

//ist mein rückgabewert eine echte nummer?

console.log("ist num3 keine echte zahl?,", isNaN('30'))