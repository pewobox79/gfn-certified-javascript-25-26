console.log("arrays")

const myArray = new Array() // => [] leeres Array
const mySecondArray = []
mySecondArray.push(10)
mySecondArray.push(12)
console.log("mysecondArry", mySecondArray)

const array1 = [1,2,3]
const array3 = array1
const array2 = [1,2,3]

console.log(array1 === array2) // => false, da es zwei unterschiedliche speicherplätze hat
console.log(array1 === array3) // => true, da beide arrays den gleichen speicherplatz einnehmen

console.log("länge des arrays1", array1.length)


const valueSecondIndexArray1 = array1['2'-1] // => gibt den zweiten index aus array 1 zurück
console.log("first index value array 1", array1['2' - 1]) // => gibt ersten index zurück
console.log("second index value array 1", valueSecondIndexArray1)


// elemente an erste stelle des array laden

const myUserArray =['max meier', 'justus jonas', 'thomas mueller']
const newUser = "Peter Wolf"

myUserArray.push(newUser)
console.log("after push", myUserArray)
const newUser1 = "klaus müller"
myUserArray.unshift(newUser1) // => an index 0 platziert
console.log("after unshift", myUserArray)


//entfernen
//myUserArray.pop()
//console.log("after pop()", myUserArray)

myUserArray.splice(2,1) // => erster parameter ist der index, an dem gestartet wird, der zweite parameter ist die anzahl der einträge die betroffen sind.
console.log("after jonas removal", myUserArray)



// teile auslesen eines arrays
const persons =['klaus', 'max', 'justus', 'paul']
console.log("auslesen array", persons.slice(2), persons)


// sortieren
const sortedPersons = persons.sort()
console.log("sorted persons", persons )

const compareNumberDescending = (a, b) => b - a
const sortedNumbers = [16, 10, 2, 12, 1].sort(compareNumberDescending) // => descending sorting;
const sortedNumbers2 = [16, 10, 2, 12, 1].sort((a, b) => a - b) // => ascending sorting;
console.log("sorted numbers", sortedNumbers, sortedNumbers2)


//map vs forEach 

let newArrayOfPersonWithIds =[]
for(let i = 0; i < persons.length; i++){
    let personWithId = persons[i] + Math.random() * 10
    newArrayOfPersonWithIds.push(personWithId)
    //console.log(`person nr. ${i + 1}: ${personWithId}`)
    //console.log("arry", newArrayOfPersonWithIds)

}
console.log("newarrayofpersonswithid", newArrayOfPersonWithIds)


const newPersonsArray = persons.map((person) => person + Math.random() * 10)

persons.forEach((person) =>{

    console.log("ausgabe foreach", person)
    return person
})

console.log("newpersons arry", newPersonsArray)

//urls erstellen
// jsgrundlagen/about-me/index.html?articleId=1113242342342341311
const pathname =['jsgrundlagen', 'about-me', 'index.html']
const articleId = "134234234234"
console.log("pathname", pathname)
const BASE_DOMAIN = 'https//www.myDomainTest.com'
const dynamicUrl = `${BASE_DOMAIN}/${pathname.join('/')}?id=${articleId}`
console.log("dyn url", dynamicUrl)