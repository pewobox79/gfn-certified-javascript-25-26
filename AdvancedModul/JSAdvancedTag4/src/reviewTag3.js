/**
 * Aufgabe: 
 * wir wollen für eine Website eine Navigation dynamisch erstellen. 
 * Unsere Daten für die Navigation erhalten wir über einen Datensatz (NavData)
 * 
 * Um die verschachtelte Struktur visuell im Terminal auszugeben, sollen die untermenüs mit 
 * eine "--" - Einrückung (level) erzeugt werden.
 * 
 * Bsp: 
Home
Products
-- Laptops
-- Phones
-- Accessories
---- Keyboards
---- Mice
About Us
Contact
 */

const navData = {
    home: "Home",
    products: {
        title: "",
        items: {
            laptops: "Laptops",
            phones: "Phones",
            accessories: {
                title: "Accessories",
                items: {
                    keyboards: "Keyboards",
                    mice: "Mice"
                }
            },
            peterslink: {
                title: "peters link",
                items:{
                    laptop: "ajsfj"
                }
            }
        }
    },
    about: "About Us",
    contact: "Contact"
};

// your code here

const repeatTab = (level) => '--'.repeat(level);

function printMenu(menuObject, level = 0) {
    for (let key in menuObject) {
        const value = menuObject[key]

        if (typeof value === "string") {
            console.log(repeatTab(level), value)
        }
        if (typeof value === "object") {
            const titleValue = value.title ? value.title : key
            console.log(repeatTab(level),titleValue )
            // if (value.title) {
            //     console.log(repeatTab(level), value.title === true ? value.title : value)
            // }
        }

        if (value.items) {
            printMenu(value.items, level + 1)
        }
    }



}




printMenu(navData)