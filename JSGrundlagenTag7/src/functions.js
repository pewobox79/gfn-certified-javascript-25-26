//FUNCTIONS
mySecondFunction() // hoisted function

//prompt() => build-in function / native function

// RUMPF
/**
()=>{} 
() hält die parameter die ich für die function benötige
=> ARROW
{} der codeblock - er kümmert sich um die logic der function sowie der rückgabe!

 */


//ARROW FUNCTION => aufruf nur möglich nachdem deklariert....!!!!
const myFirstFunction = () => {
    console.log('das ist die console aus der function')
    console.log('noch ein paar infos')
}

myFirstFunction()

//HOISTED => bedeutet die function SPRINGT and die oberste Stelle der Application / JS Datei
function mySecondFunction() {

    console.log('my second function output')
}


// function AND Parameter / Attributes

const addTwoNumbers = (num1, num2) => {

    // num1 und num2 sind CLOSED SCOPE variablen, die nur innerhalb der function verfügbar sind!
    const result = num1 + num2
    console.log('Ergbnis 4 und 5 ist: ', result)

}
addTwoNumbers(5, 4)
addTwoNumbers(10, 4)

// jede function immer auf verwendbarkeit an anderer stelle der application prüfen!
const calcTwoNumbers = (num1 = 30, num2 = 10, operator) => {

    const num1AsNumber = Number(num1)
    const num2AsNumber = Number(num2)

    let result
    switch (operator) {
        case '+':
            result = num1AsNumber + num2AsNumber
            break;
        case '*':
            result = num1AsNumber * num2AsNumber
            break;
        default: result = num1AsNumber + num2AsNumber
    }

    return isNaN(result) ? 'Not an number' : result



}

const returnCalcTwoNumbers = calcTwoNumbers("4", 5)
console.log("return value from funtion", returnCalcTwoNumbers)

const returnSecondCalc = calcTwoNumbers(returnCalcTwoNumbers, 10, '*')
console.log("return second calc", returnSecondCalc)

const thirdReturn = calcTwoNumbers(20)
console.log("third return", thirdReturn)



// automatischer Return wenn kein coding block existiert
const myColorCode = (colorname) => colorname === 'black' ? '#000' : '#fff'

const myColorAsHex = myColorCode('black')

console.log("mycolorhex", myColorAsHex)

const myNewColorCode = (colorname)=>{

    //guard / wächter / guard clause
    if(typeof colorname === 'number' || !colorname) return 'Error'

    return colorname === 'black' ? '#000' : '#fff'

}

const newColorCodeReturn = myNewColorCode()
console.log("newColorCodeReturn", newColorCodeReturn)


