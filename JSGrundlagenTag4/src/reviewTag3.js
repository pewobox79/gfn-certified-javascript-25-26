//Aufgabe:
/**
 * 1. user input mit 3 optionen PRODUKTNAME, PRICE, AMOUNT
 * 2. Berechnung Produkteinzelpreis brutto
 * 3. Berechnung der gesamtkosten netto preis
 * 4. Berechnung der gesamtkosten brutto preis
 * 5. Ausgabe Gesamtpreis brutto als ALARM info im Frontend / * Client
 */

'use strict';

const TAX_1_19 = 1.19;


// aufgabe 1
let productName = prompt('Please add product name: ');
let productPrice = prompt(' new product price');
let productAmount = prompt('Please let me know your product amount: ');

console.log(`Product: ${productName}, Price: ${productPrice}, Amount: ${productAmount}`);

// aufgabe 2. single price calculation gross
let singlePriceGross = productPrice * TAX_1_19
console.log(`Single price Gross ${singlePriceGross}`);

// aufgabe 3
let totalPriceNetto = productPrice * productAmount
console.log(`Total price Netto ${totalPriceNetto}`);

// aufgabe 4 und 5
let totalPriceGross = totalPriceNetto * TAX_1_19;
alert(`Total price Gross: ${totalPriceGross} `)