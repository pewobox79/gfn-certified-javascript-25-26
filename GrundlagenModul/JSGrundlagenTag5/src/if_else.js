// IF .... ELSE => falls etwas eintritt, dann mach eine aktion!

//deklaration IF Bedingung

const user1 = ''
let result
if(user1 == 'Peter'){
    console.log(`Hello ${user1}!`)
    result = 33 + 44
    console.log('result if:', result)
} else{
    console.log('You are not Peter')
    result = 55-44
    console.log('result else:', result)
}

// aufgabe:
// Wir haben einen input mit betrag und einen mit steuersatz
// berechne den jeweiligen steuersatz und gebe einen unterschiedlichen Rückgabe text aus!

const BASE_TAX = 19
const price = prompt('Product price in Euro');
const tax = prompt('Tax value in %');

let taxValue
if(tax == BASE_TAX){

    taxValue = price * tax / 100
    console.log("MwSt. 19 % und der Steuerwert in Euro ist: ", taxValue)

} else if(tax === 30){

    taxValue = price * tax / 100
    console.log("MwSt. 30% und der Steuerwert in Euro ist:", taxValue)

} else {
    taxValue = price * tax / 100
    console.log("MwSt. 7% und der Steuerwert in Euro ist:", taxValue)
}