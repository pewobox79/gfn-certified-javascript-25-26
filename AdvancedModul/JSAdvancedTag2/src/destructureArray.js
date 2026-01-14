//ARRAY DESTRUCTURE


const myArray = ["Peter wolf", "Lindenstrasse 6a", 46, 180, "blau"]

console.log("name", myArray[0])

const [username, street, ...rest] = myArray

console.log("name", username)
console.log("rest", rest)


const user3 = {
    username: "Heinz", // => property besteht aus [key: value]
    age: 44,
    address: {
        city: 'Kassel',
        street: "Lindenallee 4",
        zipCode: 45433
    },
    phone: 2342342,
    email: "meine Email",
    key: 'das ist mein key'
}

const user3Array = Object.entries(user3)
console.log("user3 array", user3Array)

user3Array.forEach(entry => {

    console.log("entry", entry)
    const [_, value] = entry // => _ bedeutet "überspringen bzw. ignorieren" des index 0
    console.log("value", value)
})


//csv auslesen

const productsCSV = `name, category, price
  Klingon Letter Opener, Office Warfare, 19.99
  Backpack of Holding, Travel, 29.99
  Tardis Alarmclock, Merchandise, 15.99`;

const csvToData = productsCSV.split('\n ')
console.log("csv", csvToData[0].split(', '))

const [productName, category, price] = csvToData[0].split(',')

console.log("ausgabe: ", `${productName.trim()} | ${category.trim()} | ${price.trim()}`)




function myName(myName){
    return "may name is" + myName
}

myName("peter")

console.log("myName('Peter'): ", myName("peter"))