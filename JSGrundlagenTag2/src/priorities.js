// Prioritäten festlegen

//Standard Prioritäten
console.log(2 + 3 * 4) // => 14

// Custom Prioritäten
console.log((2 + 3) * 4) // => 20

// Custom complex
console.log(12 * (44 / 11) / 3 + 67)

/**
 * 1. 44 / 11 => 4
 * 2. 12 * 4 => 48
 * 3. 48 / 3 => 16
 * 4. 16 + 67 => 83
 */



// QUIZFRAGEN

console.log((3 + 4)) // => number -> 7

console.log(('3' / 3)) // => string -> 33 oder error

console.log((3 + '4')) // => string -> 34

console.log((12 * 4)) // => number -> 48