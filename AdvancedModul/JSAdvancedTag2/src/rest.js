//REST OPERATOR

const user2 = {
    username: "Klaus", // => property besteht aus [key: value]
    age: 44,
    address: {
        city: undefined,
        street: "",
        zipCode: 87897
    },
    phone: 2342342,
    email: "meine Email",
    key: 'das ist mein key',
    gender: "m",
    rest: "mein rest value"
}


console.log("user2", user2)

// mit dem Spread Operator (...) werden daten gesammelt übergeben! z.B. ...rest === alles übrige aus der Datensatz!

const { username: aliasUsername, email: aliasEmail, ...rest } = user2; // => username mit ALIAS ersetzen, dann ist global scope problem mit user1 username nicht mehr da!! 
console.log("username user2", aliasUsername)
console.log("rest user 2", rest) // => ...rest hält alles übrige aus dem Objekt was nicht destrukturiert wurde!


// erweiterung des objects programmatisch

const items = {
    shoppingItems: [
        {
            name: "Banane",
            price: 10
        },
        {
            name: "Apfel",
            price: 10
        }
    ]
}

function extendedUserData(extensionDataAsObject) {

    console.log("objekt das zusammengführt werden soll!", extensionDataAsObject)

    const { username, email, ...rest } = user2 // Kontext Destrukturierung ist ...rest nur am ENDE und nur EINMAL zu nutzen!

    //magic Spread Operator => fügt zwei object zu einem gesamten object zusammen!!
    const updatedObject = { ...rest, ...extensionDataAsObject, ...{color: "red"} } // => im Kontext neues Object bauen fügt (...) SPREAD zwei oder mehrer Objekte zu einem neuen Objekt zusammen!
    
    console.log("updated object", updatedObject)

}

extendedUserData(items)
















