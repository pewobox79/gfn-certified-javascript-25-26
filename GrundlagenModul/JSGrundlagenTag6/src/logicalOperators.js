console.log("logical operators")

// Beispiel ohne logischem operator

let username = '';
let password = '';

//länge password und username
if(username.length >= 4){
    console.log("username correct")
} else if(username.length == 10){
    console.log("username is 10")
}

if(password.length <=20){
    console.log("correct password")
}

// Operatoren helfen abfragen oder logiken zu optimieren
// OR-Operator (eins der rückgaben sollte TRUE sein!)
if(username.length >= 4 || password.length <=30 || password.length < 2){
    console.log("eins davon trifft zu")
}else{
    console.log("keins davon trifft zu")
}

// AND - Operator (ALLE abfragen müssen true sein!)
if (username.length >= 4 && password.length <= 30 && password.length < 2) {
    console.log("trifft alles zu")
} else {
    console.log("eins davon trifft nicht zu")
}

const myNumber = 'myname' || 'yourname'
console.log("my number is: ", myNumber);

const firstCar = "BWM"
const secondCar = "Mercedes"

if(firstCar === 'Audi' && secondCar === "Mercedes"){
    console.log("eins davon correct")
}else{
    console.log("keines korrekt")
}

//EXKURS Kurzschreibweise If/else

const isCorrect = firstCar === "Audi" && secondCar ==="Mercedes" // => boolean
isCorrect ? console.log("ist correkt") : console.log("is nicht correct") // => kurzschreibweise if/else
// mit ? und : schreibweise ist manchmal ein if/else schöner zu lesen!

// Unärer Operator hat ein AUSRUFEZEICHEN VOR DER CONST / LET
const isLoggedIn = true;

if(isLoggedIn){
    console.log("du bleibst draussen!")
}else{
    console.log("welcome")
}

// Vergleich in schreibweise
// (isLoggedIn === true) (equvalent ist "isLoggedIn")
// (isLoggedIn === false) (equvalent ist "!isLoggedIn")

const a = true
const b = false
const f = 'Peter' // => ist truthy
let c // => hat noch keinen value und auch noch keine daten typen! ALSO FALSY
console.log("c hat folgenden wert", c)

if ((f === 'Peter') === false){
    console.log("mein name ist")
}else {
    console.log("kein ahnung")
}




