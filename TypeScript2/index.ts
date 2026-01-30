//typescript schema START
//interface ist wie ein Schema! Vergleichbar mit class in javascript
import type { MyNewUserType } from "./src/types/global.ts"


//typescipt schema END

const newUser: MyNewUserType = {
    name: "Peter",
    age: 45,
    color: "white",
    height: 180,
    shoppingItems: [{
        title: "Jeans",
        id: 982304,
        description: "jlkdfjlkajkd",
        amount: 33,
        quantity: 23

    }, {
        title: "Jeans",
        id: 982304,
        description: "jlkdfjlkajkd",
        amount: 33,
        quantity: 23
    }],
    gender: "männlich",
    address: {
        city: "Hamburg",
        zipCode: 44444,
        country: "Germany"
    },

    protocols: [{
        date: "283402",
        author: {
            name: "Peter",
            role: "Chefarzt"
        },
        gender: "männlich"
    },

    {

        date: "283402",
        author: {
            name: "Peter",
        role: "Chefarzt"
        },
        gender: "männlich"
    },

    {
        date: "283402",
        author: {
            name: "Peter",
            role: "Chefarzt"
        },
        gender: "männlich"
    }, {
        date: "283402",
        author: {
            name: "Peter",
            role: "Chefarzt"
        },
        gender: "männlich"
    }],

    checkoutShoppingItems(mulplikator = 1) {
        const amountOfShoppingItems = this.shoppingItems.length
        return amountOfShoppingItems * mulplikator
    }

}

const myMsg = newUser.checkoutShoppingItems()
console.log("myMsg", myMsg)


//functionen und types

function userDataView(user: MyNewUserType) {
    return `hallo User ${user.name}`
}

function updateGender(value: MyNewUserType["gender"]) {
    newUser.gender = value
}
console.log("newUser before", newUser)
updateGender("weiblich")
console.log("newuser after", newUser.gender)
const userView = userDataView(newUser)
console.log("userview", userView)