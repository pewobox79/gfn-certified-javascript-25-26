// Review tag 6

//user login mit user password und username
//cleanup login username und password values
//prüfen, ob username und password stimmen mit user feedback im client

const usernameDB = 'klausmeier1979'
const passwordDB = '#klausmeier1234'

//here your code

/*let username = prompt('Enter your username:', 'deinUsername').trim();
let password = prompt('Enter your password:', 'deinpassword').trim();

if (username === usernameDB && password === passwordDB) {
    alert('Login Successfull');
} else {
    if (username !== usernameDB) {
        alert('This Username not found.');
        location.reload()
    }
    if (password !== passwordDB) {
        alert('password is wrong');
        location.reload()
    }
    
}*/



//truthy / falsy WIEDERHOLEN
//AND Operator
const a = 'a' && true && true
const b = true && 'd' && 100
console.log('a', a)
console.log('b', b)



//OR Operator
const c = false || undefined || false
const d = 'kurs' || '' || 'Javascript'

console.log('c', c)
console.log('d', d)


//const resultFromCalc = calcTwoNumbers(10, 20)
//console.log("reviewtag 6 resultfromcalc", resultFromCalc)
mySecondFunction()
