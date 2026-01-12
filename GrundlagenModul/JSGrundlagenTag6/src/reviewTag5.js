/**
 * Erstellen ein kleines Programm, mit der ein User sich mit username und password bei einer platform anmelden kann.
Der login soll folgendes machen prüfen können:

1. Ob user mit dem eingegebenen username überhaupt existiert wenn richtiger username eingegeben ist
2. Ob password auch richtig ist
3. Prüfen, ob der username und das password auch in kombination richtig sind.

Jede Prüfung soll den user zu einer folgenden Handlung auffordern, um am Ende zum Ziel zu kommen. (LOGIN ERFOLGREICH)
 */


//DB values 
const username = 'superHero123' // =>  superhero123 
const password = 'ironMan445'

//init values
let usernameCorrect = false;
let passwordCorrect = false;


//1. werte aus client abfragen
let inputUsername = prompt('Please Enter your Username');
// 2. prüfen von username
if (inputUsername.trim() === username) {
    usernameCorrect = true
} else {
    inputUsername = prompt('please try again username')
}

let inputPassword = prompt('Please Enter your password'); 
// hebel zum weiteren verarbeiten



if(inputPassword === password){
    passwordCorrect = true
}else{
    inputPassword = prompt("Please try again your password")
}


if (usernameCorrect && passwordCorrect){
    alert('welcome to your dashboard')
} else{
    alert('Access denied! Try again');
    location.reload() // => lädt seite komplett neu um von vorne zu beginnen (zeile 1)
}
