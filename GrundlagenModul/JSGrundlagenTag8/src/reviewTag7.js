// Review Exercise

/**
 * Wir haben eine personalisierte Karte.
 * jede karte soll einen dynamischen Vor- und Nachnamen haben.
 * Der client bekommt dann einen individuellen Text, in dem der persönliche Name zu lesen ist.
 * dieser soll als alert ausgeben werden
 * 
 * tools: eingabe aus client, wiederverwendbare functionen / elemente
 * features sollten wiederverwendbar sein!
 * achtet auf clean code, DRY (Don´t repeat yourself)
 * 
 */

//code here

let userName = prompt('Enter your name please: ');
let userSurname = prompt('Enter your surname please:');
let messageType = Number(prompt('Enter type of message please (1 - privat, 2 - geschäftlich, 3 - Grüßkarte):'));
let messageTypeLetter = prompt('Enter type of message please (p - privat, b - geschäftlich, g - Grüßkarte):');


let scriptGenerator = () => {
    let script = prompt('please type your script here: ')
    return script
}

let personalCard = (userName, userSurname) => {
    const context = scriptGenerator();
    alert(`Dear ${userName} ${userSurname}, ${context}`)
}

//personalCard(userName, userSurname);


//alternative mit verschiedenen anschreibe typen
let messages = new Array();

let messageText = 'Privat: Der client %NAME% %SURNAME% bekommt dann einen individuellen Text, in dem der persönliche Name %NAME% %SURNAME% zu lesen ist.';
messages.push(messageText);

messageText = 'Geschäftlich: Der client %NAME% %SURNAME% bekommt dann einen individuellen Text, in dem der persönliche Name %NAME% %SURNAME% zu lesen ist.';
messages.push(messageText);

messageText = 'Grüßkarte: Der client %NAME% %SURNAME% bekommt dann einen individuellen Text, in dem der persönliche Name %NAME% %SURNAME% zu lesen ist.';
messages.push(messageText);

console.log("array", messages)

let messageTextForCard = messages[messageType - 1];

let personalCard2 = (userName, userSurname, messageText, msgArray) => {
    let fallbackContext = messageText ? messageText : msgArray[0]
    let context = fallbackContext.replaceAll('%NAME%', userName).replaceAll('%SURNAME%', userSurname);
    alert(`${context}`)
}

personalCard2(userName, userSurname, messageTextForCard, messages);


let messagesExt = new Array();

let messageTextExt = ['p', 'private', 'Privat: Der client %NAME% %SURNAME% bekommt dann einen individuellen Text, in dem der persönliche Name %NAME% %SURNAME% zu lesen ist.'];
messagesExt.push(messageTextExt);

messageTextExt = ['b', 'buisness', 'Privat: Der client %NAME% %SURNAME% bekommt dann einen individuellen Text, in dem der persönliche Name %NAME% %SURNAME% zu lesen ist.'];
messagesExt.push(messageTextExt);

messageTextExt = ['g', 'greeting card', 'Privat: Der client %NAME% %SURNAME% bekommt dann einen individuellen Text, in dem der persönliche Name %NAME% %SURNAME% zu lesen ist.'];
messagesExt.push(messageTextExt);


console.log("array", messagesExt);

function getMessageText(messagesExt, messageTypeLetter) {
    let messageText = 'text not found!';
    for (let index = 0; index < messagesExt.length; index++) {
        const element = messagesExt[index];
        if (element[0] === messageTypeLetter) {
            messageText = element[2];
        }
    }
    return messageText;
}

let personalCard3 = (userName, userSurname, messageText) => {
    let fallbackContext = messageText ? messageText : 'Sorry, text not found';
    let context = fallbackContext.replaceAll('%NAME%', userName).replaceAll('%SURNAME%', userSurname);
    alert(`${context}`)
}

personalCard3(userName, userSurname, messageTextForCard, getMessageText(messagesExt, messageTypeLetter));