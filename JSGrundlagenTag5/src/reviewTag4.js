/**
 * Aufgabe:
 * 1. Input feld für user zur eingabe von 
 * - produkt name
 * - netto preis
 * - steuer satz als flexiblen wert
 * - menge
 * 
 * 2. Sicherstellen, dass der eingehende wert eine Nummer sind 
 * 3. berechnen des netto gesamtpreises und ausgabe in console als information
 * 4. berechnen des brutto gesamt preises und ausgabe in console
 * 5. warenkorb anzeigen in einem alert mit anzahl der gekauften producte sowie netto und brutto preise.
 * 6. runden der zahlen auf 2 stellen nach dem komma.
 * 
 */
const productName= prompt('Please enter the product name');
const netSinglePrice = Number(prompt("Please enter the Net price in numbers:"));
const taxRate = prompt("Please enter the tax rate as a number:");
const taxRateAsNumber = Number(taxRate.replaceAll('%', '').replaceAll(',', '.').replaceAll(' ', ''));
const quantity = Number(prompt('Please enter your Quantity in Numbers: '));

//aufgabe nr. 3
const totalNet= (netSinglePrice * quantity).toFixed(2);
console.info(`Total net price: ${totalNet}`);

const totalGross = Number((totalNet * taxRate / 100) + totalNet);
console.log(`Total gross price: ${totalGross} €`); 

let cartMessage = `You have bying:\nProductName: ${productName},\nquantity: ${quantity} pieces\n`
cartMessage = cartMessage + `total net price: ${totalNet} €\n total gross price: ${totalGross.toFixed(2)} €`
alert(cartMessage)