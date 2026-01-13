console.log("objects teil zwei")

const user1 = {
    username: "Peter", // => property besteht aus [key: value]
    age: 44,
    address: {
        city: undefined,
        street: "",
        zipCode: 87897
    },
    phone: 2342342,
    email: "meine Email", 
    key: 'das ist mein key'
}

console.log(user1?.address?.city?.toUpperCase() || 'Fallback')

console.log('user 1', user1)


//Destructurien
user1.email = "email@email.de";

const { username, email, address } = user1 // => destrukurierte Werte 

//EQUIVALENT zu destructurierung
//const username = user1.username
//const email = user1.email

console.log("phone", user1.phone)
console.log("name ", username)
const key = 'phone'
console.log("alternative punkt-notierung", user1[key])
console.log("email", email)


// interation Object
// console soll name, email und phone ausgeben

const myObj2 = new Object()

myObj2.firstname = "Klaus"
console.log(myObj2)

const objEntries = Object.entries(user1) // => Ausgabe Array mit Arrays [["username", "Peter"], ['age', 46]]
console.log("entries", objEntries)
objEntries.map(entry => {
    entry.forEach(item => console.log("item", item))
})


const objKeys = Object.keys(user1) // => Array mit key-strings ["username", "age"]
console.log("objKeys", objKeys)
objKeys.forEach(key => {

    if(key === "address"){
        console.log("address keys", Object.keys(user1[key]))
    }

    console.log("ein key", user1[key])
})

const objValues = Object.values(user1) // => Array mit value als datentyp ["Peter", 45]
console.log("values", objValues)
objValues.forEach(item => console.log("value item", item))


const updatedArray = objKeys.map(key => {
    
    let updatedKeyId = key === 'username' ? 'user_name': key;

    return {
        [updatedKeyId]: user1[key]
    }

})

console.log("updated Array", updatedArray)











