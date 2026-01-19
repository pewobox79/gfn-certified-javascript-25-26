// review fetch
/**
 * 
 * Source: https://jsonplaceholder.typicode.com/users
 * 
 * 1. daten request aus der API
 * 2. daten ausgabe in console mit 
 * - username
 * - city, zipCode
 * - company
 * - website address
 */

// code here
const DOMAIN_URL = 'https://jsonplaceholder.typicode.com';
async function getUsers() {
    try {
        const response = await fetch(DOMAIN_URL + '/users');
        return await response.json();
    }
    catch (error) {
        console.log(error);
        return [];
    }

}

const allUsersData = await getUsers();
//console.log(allUsersData);

// Aufgabe teil 2

function formatedUserDataOutput(user) {
    const { username, email, company, address:{city, zipCode}, website } = user;
    
    const formatedUserOutput = `
    Username: ${username}\n
    Email: ${email}\n
    Company: ${company.name}\n
    Address: ${city} ${zipCode}\n
    Website: ${website}\n
    \n
    `
    return formatedUserOutput

}

const updateUserArray = allUsersData.map(user => formatedUserDataOutput(user))

updateUserArray.forEach(user => console.log(user))