//Initialisierung eines objects

// OBJECT ist ein non-primitive data type

const array1 = [1,2,3]
const array2 = [1,2,3]
console.log(array1 === array2) // => false


// PROPERTY ist ein eintrag in einem object und besteht aus zwei angaben:
// key : value => KEY = Identifizierer : VALUE = Wert der auf dem Identifizierer gespeichert ist.

const surname = 'wolf'
const tel = 324234
const product1 ={
    name: 'banane',
    price: 0.5,
    quantity: 10,
    size: {
        depth: 10,
        height: 5,
        width: 9
    },
    surname,
    telephone: tel

}

const product2 = {
    name: 'apfel',
    price: 0.5,
    quantity: 10,
    size: {
        depth: 10,
        height: 5,
        width: 9
    }
}

const user1 = {
    name: 'Peter',
    age: 46,
    isMarried: true,
    weight: undefined,
    address: 'lindenstrasse 0815, 88899 münchen',// bad practice
    address2:{
        street: 'lindenstrasse',
        number: '0815',
        zipCode: 88899,
        city: 'münchen'
    }, // good practice
    shoppingItems: [product1, product2]
}

console.log(user1)
console.log(user1.address2['street']) // => "Peter" , dot-notation // punkt-notierung
console.log(user1['address2'].street)
console.log(`der user hat diese daten ${user1}`) // => [object Object]

//werte verändern
user1.weight = 90
user1.shoppingItems.push({
    name: 'birne',
    price: 0.5,
    quantity: 10,
    size: {
        depth: 10,
        height: 5,
        width: 9
    }})
user1.children = 2
console.log("after update", user1)

// check data type
console.log(typeof user1)
console.log(typeof user1.name)
console.log(typeof user1.address.zipCode)

user1.shoppingItems.forEach((item)=>console.log("item", item.name))
