//const userData =require('./src/store/users.js'); => commonJS import version type:commonJS

// => ESmodule import version type: module
import userData from'./src/store/users.js'
import { sayHello } from './src/helpers/communictionHelper.js'
import User from './src/classes/userClass.js'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import * as fs from 'node:fs';

//import und classen
console.log("userdata", userData)
sayHello(userData[0].name)
const firstUser = new User('Peter', 'email@email.de')
const secondUser = new User('Klaus', 'klaus@klausen.de')
console.log(firstUser, secondUser)
firstUser.sendEmail('hallo du toller user')

//FileSystem und Path

//aktuelle file URL erhalten und convertieren
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
//ordner in root(__dirname) neu erstellen
/* fs.mkdir(join(__dirname, '/myTestFolder'),{}, (err)=>{

    if(err) {
        console.log("error bei mkdir", err)
        throw Error("ist schief gegangen", err)
    }
    console.log("ordner wurde erstellt")

}) */

//datei erstellen und beschreiben
fs.writeFile(join(__dirname, '/myTestFolder', 'test.txt'), JSON.stringify(userData), err => {
    if (err) throw err
    console.log("file written to project")

    //erweitern der bestehenden datei test.txt mit neuem daten kontent
    fs.appendFile(join(__dirname, '/myTestFolder', 'test.txt'), `\n\n ${JSON.stringify([{ name: "wonder woman", age: 44 }, { name: "klausen", age: 120 }])}`, err => {
        if (err) throw err
        console.log("appended text")
    })
})

const myTestUser = {
    name: "peter",
    age: 45,
    returnNameAndAge() {
        return this.name + this.age
    },

}

const jsonData = JSON.stringify(myTestUser)
console.log("json", jsonData)

const user = {

    age: 44,
    lastname: 'wolf'
}

const name = "kjskfjk"
const userAge = 10
const { firstname = name, age = userAge } = user
console.log("firstname", firstname, "age", userAge)