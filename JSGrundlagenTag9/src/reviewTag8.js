
/**
 * AUFGABE: 
 * Einkaufsliste mit einer Anzahl an X produkten.
 * jedes produkt soll einen namen und einen nettopreis haben.
 * der user soll am ende seiner eingabe eine übersicht (Warenkorb) der produkte mit netto und bruttopreis sowie gesamtpreis erhalten. 
 * 
 */

//code here

//notizen
/**  1. produkte in array speichern
 * 2.1 Anzahl der produkte initial eingeben 
 * OR 
 * einen TRIGGER setzen, der über eine KEYWORD 'end' stoppen soll.
 *  2.2 schleife für die prompt abfrage je produktpreis (2 prompts pro Produkt/artikel)
 * 
 * 2.2.1 innerhalb der schleife wird ein 
 * prompt(name); dann prompt(nettopreis) und final prompt(menge) => [[name, preis, menge]]
 * 
 * 3. erneute schleife für die auflistung der produkte in einer tabellenähnlichen Form.
 * 
 * 4. kalkulation nettopreis und bruttopreis (19%MwSt)
 * 5. kalkulation gesamtpreis brutto
 * 
 * 6. ausgabe über ALERT()
 * 
 * 
*/
const TAX_VALUE = 1.19;
const amountOfProducts = Number(prompt('How many products are in Your list?'));
const shoppingList = [];

function addNewProduct(i){
    let product = prompt(`please enter the ${i + 1} product:`)
    let price = Number(prompt(`please enter price of your ${i + 1} product:`)).toFixed(2)
    let quantity = Number(prompt(`please give quantity of your ${i + 1} product:`)).toFixed
    return [product, price, quantity]
}


for (let i = 0; i < amountOfProducts; i++) {
    
    let shoppingListElement = addNewProduct(i)
    shoppingList.push(shoppingListElement)
}

let totalBruttoPrice = 0;

let outputText = 'Shopping list: \n ';

for (let index = 0; index < shoppingList.length; index++) {
    const singleProduct = shoppingList[index];
    const singleBruttoPrice = singleProduct[1] * TAX_VALUE * singleProduct[2];
    totalBruttoPrice += singleBruttoPrice;
    singleProduct.push(singleBruttoPrice.toFixed(2));
    outputText = outputText + '| ' + singleProduct.join(' | ') + ' |\n';
}

outputText += `\nTotal brutto cost: ${totalBruttoPrice.toFixed(2)}  €`

alert(outputText)