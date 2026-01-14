/**
 * Ein Kunde existiert bereits im Kundenstamm.
Der Kunde soll nun eine Anzahl n von Produkten kaufen, die er selbst ein gibt. 
Anschließend sollen die Einkäufe dem bestehenden Kundendatensatz hinzugefügt wird.

ein Produkt hat folgende daten: name, price, menge

 */

const customer = {
    id: 1001,
    name: "Max Mustermann",
    email: "max@example.com",
    city: "Hamburg"
};

// code here

/**
 * 1. prompten der produkte => 3 prompts je produkt
 * 2. wie viele produkte => prompt über anzahl der produkte
 * 3. einzelprodukt ist ein object.
 * 4. produkte müssen in einem array aus objekten gespeichert werden
 * 
 * 
 */
const productItems = Number(prompt('How many items ?'));

const createNewProduct = (productItems, productIndex) => {
    const productName = prompt(`Please Enter the ${productIndex + 1} product Name of total ${productItems}`);
    const quantity = prompt(`Please Enter the quantity of product ${productIndex + 1}`);
    const productPrice = prompt(`Please Enter the product ${productIndex + 1} Price`);

    return {
        name: productName,
        quantity: quantity,
        price: productPrice
    }

}
const productList = []
for (let i = 0; i < productItems; i++) {
    let newProduct = createNewProduct(productItems, i);
    productList.push(newProduct);
}
console.log({ customer, ...productList })

customer.productList = productList; // => hier wird das original angepasst
console.log('updatedCustomer', customer);

const newCustomer = new Object(customer)
newCustomer.productList = productList
const updatedCustomer = {...customer, ...{productList}} // => neue dateninstanz erstellt

console.log("newCustomer", newCustomer)