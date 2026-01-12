//MATH OBJECT

console.log('QuadratWurzel', Math.sqrt(9)) // => 3
console.log('PI', Math.PI, typeof Math.PI) // => rückgabe PI als number
console.log('Potenz', Math.pow(4, 5), 4 ** 5) // => 1024

// => MATH-API  => APPLICATION PROGRAMMING INTERFACE

// Runden!!

const result = 3.900005
console.log("result", result)
const floorReturn = Math.floor(result);
const roundReturn = Math.round(result)
const ceilReturn = Math.ceil(result)

console.log('floor', floorReturn) // => return immer nach unten gerundet, egal ob 3.4 oder 3.5 ist immer 3
console.log('round', roundReturn) // => runden nach den mathatischen regeln 
console.log('ceil', ceilReturn) // => runden immer nach oben 3.5 und 3.7 sind immer 4

// RANDOM NUMBER

const randomNumber = Math.random()
const randomNumberUpToTen =  Math.random() * 10
const randomNumberUpToTenThousend = Math.random() * 10000
const randomNumberFull = Math.floor(randomNumberUpToTenThousend)

console.log("random number", randomNumber, randomNumberUpToTen, randomNumberFull)


// Berechne einen den höchsten Wert einer Zahlenreihe

console.log('maxwert',Math.max(10, 4, 13, 33, 5))

// nur zwei stellen hinter dem Komma ausgeben!

const total = 128.687697879
console.log(`Warenkorb Gesamt in Euro: ${total.toFixed(2)}`)